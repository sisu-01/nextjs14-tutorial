import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

// 임시 데이터
// const users = [
//     {id: 1, username: "Jhon"},
//     {id: 2, username: "Grace"},
// ]
// const posts = [
//     {id: 1, title: "제목1", body: "aa", userId: 1},
//     {id: 2, title: "제목2", body: "sdfadsfqqqq", userId: 1},
//     {id: 3, title: "제목3", body: "sadsffdasdfadsf", userId: 2},
//     {id: 4, title: "제목4", body: "sbbbf", userId: 2},
// ]

export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch posts!");
    }
}

export const getPost = async (slug) => {
    try {
        connectToDb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch post!");
    }
}

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user!");
    }
}

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!");
    }
}