/* eslint-disable @next/next/no-img-element */
import styles from "./market.module.scss"

export default function Market() {
    return (
        <main className={styles.mainContainer}>

            <section className={styles.sectionContainer}>

            <p className={styles.title}>Market from Venebra</p>

                <div className={styles.world}>
                    <p>World:</p>
                    <select>
                        <option value="">--Please choose a World--</option>
                        <option value="dog">Venebra</option>
                        <option value="cat">Reinobra</option>
                        <option value="hamster">Belobra</option>
                        <option value="parrot">Xantera</option>
                        <option value="spider">Luminera</option>
                        <option value="goldfish">Magera</option>
                    </select>
                </div>

                <div className={styles.category}>
                    <p>Armors</p>
                    <p>Weapons</p>
                    <p>Legs</p>
                    <p>Tibia Coin</p>
                </div>

                <div className={styles.itens}>
                    <p>Itens:</p>
                    <div>
                        <p>
                            <img src="/images/falconGreaves.png" alt="" />
                            Falcon Greaves
                        </p>
                        <p>
                            <img src="/images/soulBleeder.png" alt="" />
                            Soulbleeder
                        </p>
                        <p>
                            <img src="/images/souleater.png" alt="" />
                            Souleater
                        </p>
                        <p>
                            <img src="/images/tibiaCoin.png" alt="" />
                            Tibia Coins
                        </p>
                    </div>
                </div>

                <div className={styles.sellOffers}>
                    <p>Sell Offers:</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Piece Price</th>
                            </tr>
                            <tr>
                                <td>28-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>27-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>26-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>25-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={styles.buyOffers}>
                    <p >Buy Offers:</p>
                    <table>
                        <tbody>
                            <tr>
                                <th>Date</th>
                                <th>Piece Price</th>
                            </tr>
                            <tr>
                                <td>28-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>27-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>26-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                            <tr>
                                <td>25-07-2022</td>
                                <td>27,487 gold</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </section>
        </main>
    )
}