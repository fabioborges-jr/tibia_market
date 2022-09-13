/* eslint-disable @next/next/no-img-element */
export default function Item(itemProps) {
    return (
        <li onClick={itemProps.onClick} value={itemProps.itemsList.name}>
            <img src={itemProps.itemsList.image} alt="" />
            {itemProps.itemsList.name}
        </li>
    )
}