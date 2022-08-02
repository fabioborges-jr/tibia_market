/* eslint-disable @next/next/no-img-element */
import MarketPlace from "../components/MarketPlace/MarketPlace"
import styles from "./market.module.scss"

export default function Market() {
    return (
        <main className={styles.mainContainer}>
            <MarketPlace />
        </main>
    )
}