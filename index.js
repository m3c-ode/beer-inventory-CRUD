const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: getNewID } = require('uuid'); //For generating ID's

let { beers, styles } = require('./seed.js');

// let Beer = require('./models/Beer');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

//Home page with list of beers
app.get('/', (req, res) => {
    // res.send('Welcome to the 1st page');
    res.render('index', { beers });
});

//Form to create a new beer
app.get('/newBeer', (req, res) => {
    res.render('create', { styles });
});

//Page for the delivery form
app.get('/delivery', (req, res) => {
    res.render('delivery', { beers, styles });
});

//Page to show the details of each product
app.get('/beers/:id', async (req, res) => {
    const { id } = req.params;
    const beer = await beers.find(beer => beer.id === id);
    res.render('details', { ...beer });
});

//Form to edit the beer's information
app.get('/beers/:id/update', async (req, res) => {
    const { id } = req.params;
    const beer = await beers.find(beer => beer.id === id);
    res.render('edit', { beer, styles });
});

//Will fix the inventory depending on the shipments
app.patch('/', async (req, res) => {
    const { shipqty } = req.body;
    beers.forEach((beer, index) => {
        if (shipqty[index] === "") shipqty[index] = 0;
        if (isNaN(beer.qty)) parseInt(beer.qty);
        beer.qty -= shipqty[index];
    });
    res.redirect("/");

});

//Route to delete beer
app.delete('/beers/:id', async (req, res) => {
    const { id } = req.params;
    //Filter the beer array with all beers but the id selected
    beers = beers.filter(beer => beer.id !== id);
    res.redirect('/');
});

//Updates the beer with new information (when editing/updating)
app.put('/beers/:id', (req, res) => {
    const { id } = req.params;
    const { name, style, qty, price, description } = req.body;
    const newInfo = { name, style, qty, price, description };
    let beer = beers.find(beer => beer.id === id);
    //to update the object's value
    Object.assign(beer, newInfo);
    res.redirect(`/beers/${id}`);
});

//Add a new beer and redirect to index
app.post('/', (req, res) => {
    //convert qty and price to int?
    // req.body.qty = parseInt(req.body.qty);
    const newBeer = req.body;
    beers.push({ ...newBeer, id: getNewID() });
    res.redirect('/');
});

//App will run on port 3001
app.listen(3001, () => {
    console.log("APP Listening on PORT 3001");
});