const rateLimit = require('express-rate-limit');


const RateLimit = rateLimit({
    windowMS:5 *60*1000,
    max:5,
    message:'Too many requests, please try again later.'
})

module.exports = RateLimit