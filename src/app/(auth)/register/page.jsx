import styles from "./page.module.css";
import { register } from "@/lib/action";

const RegisterPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form className={styles.form} action={register}>
                    <input type="text" placeholder="username" name="username" />
                    <input type="text" placeholder="email" name="email" />
                    <input type="text" placeholder="password" name="password" />
                    <input type="text" placeholder="password again" name="passwordRepeat" />
                    <button>regist</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;