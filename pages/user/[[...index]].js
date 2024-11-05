import styles from "/styles/Shared.module.css";
import { UserProfile } from "@clerk/nextjs";




export default function UserProfilePage() {

return (

    <main className={styles.container}><UserProfile path="/user" routing="path" /></main>
);


}




