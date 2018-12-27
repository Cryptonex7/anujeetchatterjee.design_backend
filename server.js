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

var whitelist = ['http://localhost:3000/', 'http://ac-server.herokuapp.com/', 'https://cryptonex7.github.io']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json('Its working on server');
})

app.post('/subscribe', (req, res)=>{
    const { email } = req.body;
    
    db('subscribers').insert({
        email: email,
        joined: new Date()
    })
        .then(data => {
            console.log(data)
            res.status(200).json( "200" )
        })
        .catch(err => {
            console.log(err);
            res.status(400).json( err )
        })
})

app.listen(process.env.PORT || 3002, ()=>{
    console.log(`App is Listening on Port ${process.env.PORT}`);
})