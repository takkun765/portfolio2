/* http://localhost:3000/myprofile */

import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function MyProfileList() {
    return <div>
            <main className={styles.main}>
                <h2 className={styles.title}>制作物リスト</h2>
                <ul className={styles.list}>
                    <li><Link href="myprofile/vba">VBA</Link></li>
                    <li><Link href="myprofile/db">DB</Link></li>
                    <li><Link href="myprofile/dtp">DTP</Link></li>
                    <li><Link href="myprofile/video">VIDEO</Link></li>
                </ul>
            </main>
        </div>;
}