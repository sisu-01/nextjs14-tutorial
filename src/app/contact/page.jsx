import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill className={styles.img} />
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <input type="text" placeholder="이름"/>
            <input type="text" placeholder="이메일"/>
            <input type="text" placeholder="폰번 ( 선택적 )"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="메시지"></textarea>
            <button>전송</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactPage;