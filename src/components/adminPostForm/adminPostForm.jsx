"use client";

import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({userId}) => {

    const [state, formAction] = useFormState(addPost, undefined);
    
    return (
        <form action={formAction} className={styles.form}>
            <h1>Add New Post</h1>
            <input type="hidden" name="userId" value={userId} />
            <input type="text" placeholder="title" name="title" />
            <input type="text" placeholder="slug" name="slug" />
            <input type="text" placeholder="img" name="img" />
            <textarea type="text" placeholder="desc" name="desc" rows={10}/>
            <button>Add</button>
            {state && state.error}
        </form>
    );
}

export default AdminPostForm;