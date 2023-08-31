const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/authenticateuser')
const routes = express.Router()


const {users,careers,availability}=require('../model')

// login
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

// =====user router==========
routes.get('/users',(req,res)=>{
    users.fetchUsers(req,res)
})
routes.get('/user/:id',(req,res)=>{
    users.fetchUser(req,res)
})
routes.post('/register', bodyParser.json(),
(req,res)=>{
    users.register(req,res)
})
routes.put('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id',bodyParser.json(),
(req,res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id',(req,res)=>{
    users.deleteUser(req,res)
})
// ===careers router===
routes.get('/careers',  (req, res) => {
    careers.fetchCareers(req, res);
});

routes.get('/career/:id', (req, res) => {
    careers.fetchCareer(req, res);
});

routes.post('/addcareer', bodyParser.json(), (req, res) => {
    careers.addCareer(req, res);
});

routes.put('/career/:id', bodyParser.json(), (req, res) => {
    careers.updateCareer(req, res);
});

routes.patch('/career/:id', bodyParser.json(), (req, res) => {
    careers.updateCareer(req, res);
});

routes.delete('/career/:id', (req, res) => {
    careers.deleteCareer(req, res);
});
// ====availability=====
routes.get('/availability', (req, res) => {
   availability.fetchAvailability(req, res);
});

routes.get('/availability/:id', (req, res) => {
   availability.fetchAvailability(req, res);
});

routes.post('/addAvailability', bodyParser.json(), (req, res) => {
   availability.addAvailability(req, res);
});

routes.put('/availability/:id', bodyParser.json(), (req, res) => {
   availability.updateAvailability(req, res);
});

routes.patch('/availability/:id', bodyParser.json(), (req, res) => {
   availability.updateAvailability(req, res);
});

routes.delete('/availability/:id', (req, res) => {
   availability.deleteAvailability(req, res);
});



module.exports ={
    express,
    routes
}

