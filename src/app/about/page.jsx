import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: 'About',
  description: 'about page description',
}

const AboutPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>대행에 대해</h2>
          <h1 className={styles.title}>우리는 더 크고 두껍고 용감하고 더 나은 디지털 생각을 창조합니다.</h1>
          <p className={styles.desc}>
            우리는 더 크고 두껍고 용감하고 더 나은 디지털 생각을 창조합니다.
            진짜임 믿어주셈 당장 투자하셈 주식 하고 다 꼴아박아~
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10만회</h1>
              <p>이달의 사용회수</p>
            </div>
            <div className={styles.box}>
              <h1>10만회</h1>
              <p>이달의 사용회수</p>
            </div>
            <div className={styles.box}>
              <h1>10만회</h1>
              <p>이달의 사용회수</p>
            </div>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img} />
        </div>
      </div>
    );
  };
  
  export default AboutPage;