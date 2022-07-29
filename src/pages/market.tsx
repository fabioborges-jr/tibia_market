/* eslint-disable @next/next/no-img-element */
import styles from "./market.module.scss"

export default function Market() {
    return (
        <main className={styles.mainContainer}>
            <section>

                <p>Market from Venebra</p>

                <div>
                    <ul>
                        <li>Armors</li>
                        <li>Weapons</li>
                        <li>Legs</li>
                        <li>Tibia Coin</li>
                    </ul>

                    <div>
                        <p>Itens:</p>
                        <ul>
                            <li>
                                <img src="/images/falconGreaves.png" alt="" />
                                <p>Falcon Greaves</p>
                            </li>
                            <li>
                                <img src="/images/soulBleeder.png" alt="" />
                                <p>Soulbleeder</p>
                            </li>
                            <li>
                                <img src="/images/souleater.png" alt="" />
                                <p>Souleater</p>
                            </li>
                            <li>
                                <img src="/images/tibiaCoin.png" alt="" />
                                <p>Tibia Coins</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Server:</p>
                        <select>
                            <option value="">--Please choose an server--</option>
                            <option value="dog">Venebra</option>
                            <option value="cat">Reinobra</option>
                            <option value="hamster">Belobra</option>
                            <option value="parrot">Xantera</option>
                            <option value="spider">Luminera</option>
                            <option value="goldfish">Magera</option>
                        </select>
                    </div>

                    <div>
                        <p>Sell Offers:</p>
                        <table>
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
                        </table>

                        <div>
                        <p>Buy Offers:</p>
                        <table>
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
                        </table>
                        
                    </div>
                    </div>
                </div>
            </section>
        </main>
    )
}