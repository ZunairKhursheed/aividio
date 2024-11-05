
import styles from "/styles/Shared.module.css";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => <main className={styles.container}><SignIn /></main>;


export default SignInPage;
