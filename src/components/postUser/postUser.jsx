// FETCH DATA WITH API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: "no-store"});

//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }

//     return res.json();
// }

import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";
import Image from "next/image";

const PostUser = async ({userId}) => {

    // FETCH DATA WITH API
    // const user = await getData(userId);

    // FETCH DATA WITHOUT API
    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <Image
                src={user.img ? user.img : "/noavatar.png"}
                alt=""
                width={50}
                height={50}
                className={styles.avatar}
            />
            <div className={styles.texts}>
                <span className={styles.title}>사람</span>
                <span className={styles.username}>{user.username}</span>
            </div>
        </div>
    );
}

export default PostUser;