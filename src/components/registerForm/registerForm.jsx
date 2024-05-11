"use client";

import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {

    const [state, formAction] = useFormState(register, undefined);

    const router = useRouter();

    useEffect(() => {
        state?.success && router.push('/login');
    }, [state?.success, router]);

    return (
        <form className={styles.form} action={formAction}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="password again" name="passwordRepeat" />
            <button>regist</button>
            { state?.error }
            <Link href="/login">이미 계정이 있으신가요? <b>로그인</b></Link>
        </form>
    );
}

export default RegisterForm;