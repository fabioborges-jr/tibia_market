export default function BuyOfferList(pricesProps) {
    return (
        <tr>
            <td>{pricesProps.pricesList.date}</td>
            <td>{pricesProps.pricesList.price} gold</td>
        </tr>
    )
}