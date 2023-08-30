const users = require('./users')
const careers =require('./careers')
const availability = require('./availability')

// // EXPORT AL OBJJECTS
module.exports = {
    users: new users(),
    careers: new careers(),
    availability : new availability(),
 
}