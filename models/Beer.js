class Beer {
    constructor(id, name, type, qty, price, description = "") {
        this.id = id;
        this.name = name;
        this.type = type;
        this.qty = qty;
        this.price = price;
        this.description = description;
    }
}

module.exports = Beer;