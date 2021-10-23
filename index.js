const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World 1aaa1')
})

const users = [ 
    {id:0, name: 'Shabnur', email: 'shabnur@gmail.com', phone: '01788888888'},
    {id:1, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888'},
    {id:2, name: 'Srabonti', email: 'Srabonti@gmail.com', phone: '01788888888'},
    {id:3, name: 'Sonia', email: 'Sonia@gmail.com', phone: '01788888888'},
    {id:4, name: 'Sadia', email: 'Sadia@gmail.com', phone: '01788888888'},
    {id:5, name: 'Sushmita', email: 'Sushmita@gmail.com', phone: '01788888888'},
]
app.get('/users',cors(), (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    res.json(newUser)
})


});
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'orange', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req,res) => {
    res.send('fazli aam khai na')
})

app.listen(port, () => {
    
});