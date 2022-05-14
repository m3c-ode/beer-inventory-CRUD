const mongoose = require('mongoose');

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

const beerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: styles,
        lowercase: true, //will put all in lowercase
        required: true
    },
    qty: {
        type: Number,
        required: true,
        min: 0
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String
    }
});

const Beer = mongoose.model('Beer', beerSchema);


// class Beer {
//     constructor(id, name, type, qty, price, description = "") {
//         this.id = id;
//         this.name = name;
//         this.type = type;
//         this.qty = qty;
//         this.price = price;
//         this.description = description;
//     }
// }



module.exports = Beer;