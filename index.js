const express =require('express');
const mongoose  = require('mongoose');
const Cards=require('./schema/datamodel.js')
const app=express();
app.use(express.json())
mongoose.connect('mongodb+srv://himanshu0180:12345@cluster0.0tls5en.mongodb.net/')
var cors = require('cors')

app.use(cors())

app.get('/',function(req,res){
    res.send("hello")
})




app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;
    Cards.create(dbCard)
            .then(data => res.status(201).send(data))
            .catch(err => res.status(500).send(err))
})

app.get('/tinder/cards', (req, res) => {
    Cards.find()
            .then(data => res.status(200).send(data))
            .catch(err => res.status(500).send(err))
})
app.listen(8000)