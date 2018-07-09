const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true,
    }
  });


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json('Its working');
})

app.post('/subscribe', (req, res)=>{
    const { email } = req.body;
    
    db('subscribers').insert({
        email: email,
        joined: new Date()
    })
        .then(data => {
            console.log(data)
            res.status(200).json( email )
        })
        .catch(err => {
            res.status(400).json( "400" )
        })
})

app.listen(process.env.PORT || 3001, ()=>{
    console.log(`App is Listening on Port ${process.env.PORT}`);
})