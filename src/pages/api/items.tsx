export default function items(req, res) {

    let data = [
        { category: "other", name: "Tibia Coin", image: "/images/itemTibiaCoin.gif", buyPrices: [], sellPrices: [] },
        { category: "legs", name: "Falcon Greaves", image: "/images/itemFalconGreaves.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Soulbleeder", image: "/images/itemSoulbleeder.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Soulshredder", image: "/images/itemSoulshredder.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Soulmainer", image: "/images/itemSoulmainer.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Souleater", image: "/images/itemSouleater.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Soultainter", image: "/images/itemSoultainter.gif", buyPrices: [], sellPrices: [] },
        { category: "weapons", name: "Soulhexer", image: "/images/itemSoulhexer.gif", buyPrices: [], sellPrices: [] }
    ]

    res.json(data);
}
