const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'admin',
      database : 'Portfolio-Subscribers'
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
    }).then(console.log);
    res.json( email );
})

app.listen(3001, ()=>{
    console.log('App is Listening on Port 3001');
})