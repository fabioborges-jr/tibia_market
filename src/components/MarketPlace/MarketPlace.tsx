/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.scss"
import Select from "react-select"

export default function MarketPlace() {

    const options = [
        { value: "venebra", label: "Venebra" },
        { value: "belobra", label: "Belobra" },
        { value: "reinobra", label: "Reinobra" },
        { value: "gladera", label: "Gladera" }
    ]

    return (
        <section className={styles.sectionContainer}>

            <p className={styles.title}>Market from Venebra</p>

            <div className={styles.world}>
                <Select
                    options={options}
                    placeholder="Select the world"
                    isClearable
                    className={styles.select}
                    closeMenuOnScroll={false}
                />
            </div>

            <div className={styles.category}>
                <select multiple>
                    <option>Armor</option>
                    <option>Legs</option>
                    <option>Weapon</option>
                    <option>Other</option>
                </select>
            </div>

            <ul className={styles.items}>
                <li>
                    <img src="/images/falconGreaves.png" alt="" />
                    Falcon Greaves
                </li>
                <li>
                    <img src="/images/soulBleeder.png" alt="" />
                    Soul Bleeder
                </li>
                <li>
                    <img src="/images/souleater.png" alt="" />
                    Souleater
                </li>
                <li>
                    <img src="/images/tibiaCoin.png" alt="" />
                    Tibia Coin
                </li>
            </ul>

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

            <div className={styles.howMuch}>
                <p>How much does it cost at Venebra right now? (login with google require)</p>
                <article>
                    <label>Sell Offer:<input type="number" name="" id="" /></label>
                    <label>
                        Buy Offer:
                        <input type="number" name="" id="" />
                        <button>Submit</button>
                    </label>

                </article>
            </div>

        </section>
    )
}