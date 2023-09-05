const mentors = require('./mentors')
const mentees =require('./mentees')
const reservations = require('./reservations')

// // EXPORT AL OBJJECTS
module.exports = {
    mentors: new mentors(),
    mentees: new mentees(),
    reservations : new reservations(),
 
}