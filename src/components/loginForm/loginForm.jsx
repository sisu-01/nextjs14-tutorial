"use client";

import styles from "./loginForm.module.css";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { login } from "@/lib/action";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {

    const [state, formAction] = useFormState(login, undefined);

    const router = useRouter();

    useEffect(() => {

    }, []);

    return (
        <div className={styles.container}>
            <form className={styles.form} action={formAction}>
                <input type="text" placeholder="username" name="username" />
                <input type="text" placeholder="password" name="password" />
                <button>Login with credentials</button>
                { state?.error }
                <Link href="/register">
                    계정이 없어? <b>회원가입</b>
                </Link>
            </form>
        </div>
    );
}

export default LoginForm;