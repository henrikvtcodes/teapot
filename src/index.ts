// Module Imports
import express = require('express');

// Function Imports
// import Drink from '@drinks';

// Initialize Objects & Variables
const api = express();
const drinks: object = {
    'drinks':{
        'tea':[
            'Chamomile',
            'Lemon',
            'Earl Gray'
        ],
        'coffee':[],
        'soda':[],
        'smoothie':[]
    }
}

// Express Routes
api.get('/', (req, res) => {
    res.send({'I am a': 'Teapot'})
    }
)

api.get('/drinks/list', (req, res) => {
    res.send(drinks)
    }
)

// api.get('/drinks/:id', (req, res) => {
//     Drink(req, res);
//     }
// )

function start(port:number=3000) {
    api.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
        }
    )
}

start();