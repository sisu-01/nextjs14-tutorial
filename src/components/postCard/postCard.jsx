import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="http://www.sisu.co.kr/media/thumbnail/thumbnail-20240401-160518-354.jpg" alt="" fill className={styles.img} />
                </div>
                <span className={styles.date}>01.01.2024</span>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>제목z</h1>
                <p className={styles.desc}>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리 나라 만세</p>
                <Link className={styles.link} href="/blog/post">더 읽기</Link>
            </div>
        </div>
    );
}

export default PostCard;