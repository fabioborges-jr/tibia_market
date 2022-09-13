export default function SellOfferList(pricesProps) {
    return (
        <>
            <td>{pricesProps.pricesList.date}</td>
            <td>{pricesProps.pricesList.price}</td>
        </>
    )
}