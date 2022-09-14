import Select from "react-select"
import axios from "axios"
import { useEffect, useState } from "react"

import MarketItem from "../MarketItem/MarketItem"
import SellOfferList from "../SellOfferList/SellOfferList"

import styles from "./styles.module.scss"
import BuyOfferList from "../BuyOfferList/BuyOfferLIst"

export default function MarketPlace() {

    const [items, setItems] = useState([])
    const [worldSelected, setWorldSelected] = useState("")
    const [itemsApi, setItemsApi] = useState([])
    const [optionsSelectWorld, setOptionsSelectWorld] = useState([])
    const [sellPrices, setSellPrices] = useState([])
    const [buyPrices, setBuyPrices] = useState([])

    useEffect(() => {
        axios.get("/api/items")
            .then(response => setItemsApi(response.data))
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

    function handleSubmitPrices(){
        axios.post("/api/items")
    }

    function handleSelectWorld(world) {
        itemsApi.map(item => {
            if (world.value === item.world) {
                setItems(item.items)
            }
        })
        setWorldSelected(world.value)
    }

    return (
        <section className={styles.sectionContainer}>

            <p className={styles.title}>{worldSelected ? `Market from ${worldSelected}` : "Market"}</p>

            <div className={styles.world}>
                <Select
                    options={optionsSelectWorld}
                    placeholder="Select the world"
                    className={styles.select}
                    onChange={handleSelectWorld}
                    id="long-value-select"
                    instanceId="long-value-select"
                />
            </div>

            <ul className={styles.items}>
                {items.map(item =>
                    <MarketItem
                        key={item.name}
                        itemsList={item}
                        onClick={() => {
                            setSellPrices(item.sellPrices)
                            setBuyPrices(item.buyPrices)
                        }}
                    />)}
            </ul>

            <div className={styles.sellOffers}>
                <p>Sell Offers:</p>
                <table>
                    <tbody>
                        <tr>
                            <th>Date</th>
                            <th>Piece Price</th>
                        </tr>
                        {sellPrices.map(price => <SellOfferList pricesList={price} key={price.date} />)}
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
                        {buyPrices.map(price => <BuyOfferList pricesList={price} key={price.date} />)}
                    </tbody>
                </table>
            </div>

            <div className={styles.howMuch}>
                <p>{worldSelected ? `How much does it cost at ${worldSelected} right now? (login with google require)` : ""}</p>
                <article>
                    <label>Sell Offer:<input type="number" name="" id="" /></label>
                    <label>
                        Buy Offer:
                        <input type="number" name="" id="" />
                        <button onClick={handleSubmitPrices}>Submit</button>
                    </label>
                </article>
            </div>

        </section>
    )
}