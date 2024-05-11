"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {

    // const title = formData.get("title");
    
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("save to db");
        revalidatePath("/");
    } catch (err) {
        console.log(err);
        return {
            error: "addPost error"
        };
    }
}

export const deletePost = async (formData) => {
    
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("delete from db");
        revalidatePath("/");
    } catch (err) {
        console.log(err);
        return {
            error: "addPost error"
        };
    }
}

export const register = async (previousState, formData) => {
    const { username, email, password, passwordRepeat } = Object.fromEntries(formData);
    console.log(username, email, password, passwordRepeat);
    if (password !== passwordRepeat) {
        console.log("zz");
        return { error: "비번이 다름" };
    }
    try {
        connectToDb();
        const user = await User.findOne({username});
        if (user) {
            return { error: "username already exist" };
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = User({
            username,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        console.log("save to db");
        return { success: true };
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong" };
    }
}

export const login = async (previousSate, formData) => {
    const { username, password } = Object.fromEntries(formData);
    try {
        await signIn("credentials", {username, password});
    } catch (error) {
        console.log(error);
        if ( error.message.includes("CredentialsSignin")) {
            return {error: "Invalid username or password"}
        }
        throw error;
    }
}

export const handleGithubLogin = async () => {
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
}