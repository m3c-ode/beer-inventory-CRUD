const { v4: getNewID } = require('uuid'); //For generating ID's

let beers = [
    {
        id: getNewID(),
        name: "Michel BEld'Am",
        style: "IPA",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        id: getNewID(),
        name: "Henriette's Secret",
        style: "Sour",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        id: getNewID(),
        name: "Yuzu Sobaki",
        style: "Saison",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        id: getNewID(),
        name: "Love Potion",
        style: "Wheat",
        qty: 10,
        price: 6,
        description: ""
    }
];

const styles = [
    "Lager",
    "Pilsner",
    "Pale Ale",
    "IPA",
    "Saison",
    "Stout/Porter",
    "Dark",
    "Wheat",
    "Sour",
    "Cider",
    "English",
    "Brown",
    "Other"
];

module.exports = { beers, styles };