"use server";

import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDb } from "./utils";

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