import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="http://www.sisu.co.kr/media/thumbnail/thumbnail-20240401-160518-354.jpg"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>제목</h1>
        <div className={styles.detail}>
          <Image src="http://www.sisu.co.kr/media/thumbnail/thumbnail-20231106-125618-254.jpg"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>사람</span>
            <span className={styles.detailValue}>시수</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>작성일</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium nostrum laudantium praesentium quae. Odit, sint fugiat culpa fuga necessitatibus inventore consequatur sequi obcaecati quidem quisquam aspernatur adipisci non ea a!
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;