const mongoose = require('mongoose');

//Step 3 : Create Models, schema, and require it.
const Beer = require('./models/Beer');

mongoose.connect('mongodb://localhost:27017/beerInventory')
    .then(() => {
        console.log("MONGO CONNECTION Open");
    })
    .catch(err => {
        console.log("there's an MONGO ERROR");
        console.log(err);
    });

let seedBeers = [
    {
        // id: getNewID(),
        name: "Michel BEld'Am",
        style: "IPA",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        // id: getNewID(),
        name: "Henriette's Secret",
        style: "Sour",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        // id: getNewID(),
        name: "Yuzu Sobaki",
        style: "Saison",
        qty: 10,
        price: 6,
        description: ""
    },
    {
        // id: getNewID(),
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

// module.exports = { beers, styles };

Beer.insertMany(seedBeers)
    .then(res => console.log(res))
    .catch(err => console.log(err));