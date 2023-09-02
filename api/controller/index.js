const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/Authenticateuser')
const routes = express.Router()


const {users,careers,reservations}=require('../model')

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
// ====reservations=====
routes.get('/reservations', (req, res) => {
   reservations.fetchReservations(req, res);
});

routes.get('/reservations/:id', (req, res) => {
   reservations.fetchReservations(req, res);
});

routes.post('/addreservations', bodyParser.json(), (req, res) => {
   reservations.addReservations(req, res);
});

routes.put('/reservations/:id', bodyParser.json(), (req, res) => {
   reservations.updateReservations(req, res);
});

routes.patch('/reservations/:id', bodyParser.json(), (req, res) => {
   reservations.updateReservations(req, res);
});

routes.delete('/reservations/:id', (req, res) => {
   reservations.deleteReservations(req, res);
});



module.exports ={
    express,
    routes
}

