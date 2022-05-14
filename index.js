const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: getNewID } = require('uuid'); //For generating ID's
const mongoose = require('mongoose');

// import { beers } from './seed';
let { beers, styles } = require('./seed.js');

let Beer = require('./models/Beer');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.send('Welcome to the 1st page');
    res.render('index', { beers });
});

app.get('/newBeer', (req, res) => {
    res.render('create', { styles });
});

app.get('/beers/:id', async (req, res) => {
    const { id } = req.params;
    const beer = await beers.find(beer => beer.id === id);
    // console.log(beer);
    res.render('details', { ...beer });
});

app.get('/beers/:id/update', async (req, res) => {
    const { id } = req.params;
    const beer = await beers.find(beer => beer.id === id);
    // console.log(beer);
    // res.send(beer);
    res.render('edit', { beer, styles });
});

app.patch('/beers/:id', (req, res) => {
    const { id } = req.params;
    const { name, type, qty, price, description } = req.body;
    const newInfo = { name, type, qty, price, description };
    // const newBeer = new Beer(id = getNewID(), name, type, qty, price, description);
    console.log(newInfo);
    let beer = beers.find(beer => beer.id === id);
    console.log(beer);
    // beer = { ...beer, ...newInfo };
    Object.assign(beer, newInfo);
    // Object.keys(newInfo).forEach(key => beer[key] = newInfo[key]);
    console.log(beer);
    // beers.push(newBeer);
    res.redirect(`/beers/${id}`);

});


app.post('/', (req, res) => {
    console.log(req.body);
    const newBeer = req.body;
    beers.push({ ...newBeer, id: getNewID() });
    res.redirect('/');
});

app.listen(3001, () => {
    console.log("APP Listening on PORT 3001");
});