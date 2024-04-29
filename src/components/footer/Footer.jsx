import styles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>sisudev</div>
            <div className={styles.text}>ㅁㄴㅇㄻㄴㅇㄹ all rights reserved</div>
        </div>
    );
}

export default Footer;