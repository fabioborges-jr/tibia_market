import { FcGoogle } from "react-icons/fc"

import styles from "./styles.module.scss"

export default function SignInButton() {
    return (
        <button className={styles.signIn}>
            <FcGoogle />
            <p>Sign In with Google</p>
        </button>
    )
}