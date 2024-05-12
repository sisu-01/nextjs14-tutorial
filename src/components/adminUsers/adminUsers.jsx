import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import { deleteUser } from "@/lib/action";
import Image from "next/image";

const AdminUsers = async () => {

    const users = await getUsers();

    return (
        <div className={styles.container}>
            <h1>user</h1>
            {users.map(user => (
                <div className={styles.user} key={user.id}>
                    <div className={styles.detail}>
                        <Image src={user.img || "/noAvatar.png"} alt="" width={50} height={50}/>
                        <span className={styles.userTitle}>{user.username}</span>
                    </div>
                    <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} readOnly />
                        <button className={styles.userButton}>delete</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

export default AdminUsers;