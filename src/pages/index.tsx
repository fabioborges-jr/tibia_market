/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./home.module.scss"

export default function Home() {
  return (
    <main className={styles.mainContainer}>

      <section className={styles.sectionContainer}>

        <span>Welcome to <Image src="/images/tibiaCoins.png" alt="market tibia" width={146} height={146} />
          <h1>MarketTibia</h1>
          a marketplace located at website,<br /> provided by the community
        </span>

        <img src="/images/market.png" alt="market tibia" width={749} height={539} />

      </section>

    </main>
  )
}