const express = require('express');
const app = express();
const path = require('path');
const convert = require('./lib/convert');

app.set('view engine', 'ejs')
app.set('vies', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cotacao', (req, res) => {
    console.log(req)
    res.render('cotacao')
})

app.listen(3000, err => {
    if(err){
        console.log("Nao foi possivel iniciar")
    }else{
        console.log('Convert my money esta on-line')
    }
})