export default function items(req, res) {

    let data = [
        { category: "other", name: "Tibia Coin" },
        { category: "legs", name: "Falcon Greaves" },
        { category: "weapons", name: "Soulbleeder" },
        { category: "weapons", name: "Soulshredder" },
        { category: "weapons", name: "Soulmainer" },
        { category: "weapons", name: "Souleater" },
        { category: "weapons", name: "Soultainter" },
        { category: "weapons", name: "Soulhexer" }
    ]

    res.json(data);
}
