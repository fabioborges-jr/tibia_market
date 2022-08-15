/* eslint-disable @next/next/no-img-element */
export default function Item(props) {
    return (
        <li>
            <img src={props.itemsList.image} alt="" />
            {props.itemsList.name}
        </li>
    )
}