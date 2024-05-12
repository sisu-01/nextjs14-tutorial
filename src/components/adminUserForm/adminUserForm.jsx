"use client";

import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { addUser } from "@/lib/action";

const AdminUserForm = () => {

    const [state, formAction] = useFormState(addUser, undefined);

    return (
        <form action={formAction} className={styles.form}>
            <h1>Add New User</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="email" name="email" />
            <input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="img" name="img" />
            <select name="isAdmin">
                <option value="false" defaultValue >User</option>
                <option value="true">Admin</option>
            </select>
            <button>Add</button>
            {state && state.error}
        </form>
    );
}

export default AdminUserForm;