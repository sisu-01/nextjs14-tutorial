import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// }

export const generateMetadata = async ({params}) => {
  const {slug} = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
}

const SinglePostPage = async ({params}) => {

  const {slug} = params;

  // FETCH DATA WITH API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT API
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (<div className={styles.imgContainer}>
        <Image
          src={post.img}
          alt=""
          fill
          className={styles.img}
        />
      </div>)}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>로딩중..</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>작성일</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.desc}
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;