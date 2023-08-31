const users = require('./users')
const careers =require('./careers')
const reservations = require('./reservations')

// // EXPORT AL OBJJECTS
module.exports = {
    users: new users(),
    careers: new careers(),
    reservations : new reservations(),
 
}