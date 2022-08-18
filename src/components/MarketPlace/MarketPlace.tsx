import Select from "react-select"
import axios from "axios"
import { useEffect, useState } from "react"

import MarketItem from "../MarketItem/MarketItem"
import SellOfferList from "../SellOfferList/SellOfferList"

import styles from "./styles.module.scss"

export default function MarketPlace() {

    const [items, setItems] = useState([])
    const [optionsSelectWorld, setOptionsSelectWorld] = useState([])
    const [worldSelect, setWorldSelect] = useState("")

    useEffect(() => {
        axios.get("/api/items")
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, [])

    useEffect(() => {
        let data = []
        axios.get("/api/items")
            .then(response => data = response.data)
            .then(response => setOptionsSelectWorld(data.map(world => {
                return ({ value: world.world, label: world.world })
            })))
            .catch(error => console.log(error))
    }, [])

    function handleSelectItem(item) {
    }

    function handleSelectWorld(select) {
        setWorldSelect(select.value)

        items.map(world => {
            if (world.world === worldSelect) {
                setItems(world.items)
            }
        })
    }

    return (
        <section className={styles.sectionContainer}>

            <p className={styles.title}>Market from Venebra</p>

            <div className={styles.world}>
                <Select
                    options={optionsSelectWorld}
                    placeholder="Select the world"
                    className={styles.select}
                    onChange={handleSelectWorld}
                />
            </div>

            <ul className={styles.items}>
                {items.map(item => <MarketItem key={item.name} itemsList={item} onClick={handleSelectItem} />)}
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