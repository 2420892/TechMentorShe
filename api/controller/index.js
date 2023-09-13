const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/AuthenticateMentor')
const routes = express.Router()

const {mentors,mentees,reservations}=require('../model')

// Mentor login
routes.post('/mentor/login2',
bodyParser.json(), (req, res)=>{
    mentors.login2(req, res)
})
// Mentee login
routes.post('/mentee/login',
bodyParser.json(), (req, res)=>{
    mentees.login(req, res)
})

// =====user router==========
routes.get('/mentors',(req,res)=>{
    mentors.fetchMentors(req,res)
})
routes.get('/mentor/:id',(req,res)=>{
    mentors.fetchMentor(req,res)
})
routes.post('/register', bodyParser.json(),
(req,res)=>{
    mentors.register(req,res)
})
routes.put('/mentor/:id',bodyParser.json(),
(req,res)=>{
    mentors.updateMentor(req,res)
})
routes.patch('/mentor/:id',bodyParser.json(),
(req,res)=>{
    mentors.updateMentor(req,res)
})
routes.delete('/mentor/:id',(req,res)=>{
    mentors.deleteMentor(req,res)
})
// ===mentees router===
routes.get('/mentees',  (req, res) => {
    mentees.fetchMentees(req, res);
});

routes.get('/mentee/:id', (req, res) => {
    mentees.fetchMentee(req, res);
});

routes.post('/addMentee', bodyParser.json(), (req, res) => {
    mentees.addMentee(req, res);
});

routes.put('/mentee/:id', bodyParser.json(), (req, res) => {
    mentees.updateMentee(req, res);
});

routes.patch('/mentee/:id', bodyParser.json(), (req, res) => {
    mentees.updateMentee(req, res);
});

routes.delete('/mentee/:id', (req, res) => {
    mentees.deleteMentee(req, res);
});
// ====reservations=====
routes.get('/mentee/:id/reservations', (req, res) => {
   reservations.fetchReservations(req, res);
});

routes.post('/reservation', bodyParser.json(), (req, res) => {
   reservations.addReservations(req, res);
});

routes.put('mentee/:id/reservation/:id', bodyParser.json(), (req, res) => {
   reservations.updateReservations(req, res);
});

routes.patch('mentee/:id/reservation/:id', bodyParser.json(), (req, res) => {
   reservations.updateReservations(req, res);
});

routes.delete('/mentee/:id/reservation', (req, res) => {
    reservations.deleteReservations(req, res);
});
routes.delete('/mentee/:id/reservation/:resID', (req, res) => {
    reservations.deleteReservation(req, res);
});
 


module.exports ={
    express,
    routes
}

