import Image from "next/image";
import SignInButton from "../SignInButton/SignInButton";

import styles from "./styles.module.scss"

export default function Header() {
    return (
        <header>
            <div className={styles.container}>
                <Image src="/images/tibiamarket.svg" alt="" width={47} height={49}/>
                <nav>
                    <a>Home</a>
                    <a>Market</a>
                    <a>About</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}