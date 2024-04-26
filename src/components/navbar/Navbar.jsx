import Links from "./links/Links";
import styles from "./NavBar.module.css";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Logo</div>
            <div>
                <Links />
            </div>
        </div>
    );
}

export default NavBar;