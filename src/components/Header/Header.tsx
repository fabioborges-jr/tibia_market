/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import SignInButton from "../SignInButton/SignInButton";

import styles from "./styles.module.scss"

export default function Header() {
    return (
        <header className={styles.headerContainer}>

            <div className={styles.container}>
                <img src="/images/tibiamarket.svg" alt="" width={47} height={49} />

                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Market</a>
                    <a>About</a>
                </nav>

                <SignInButton />
            </div>

        </header>
    )
}