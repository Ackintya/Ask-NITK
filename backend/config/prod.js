require('dotenv').config();
module.exports = {
    mongoURL:process.env.MONGO_URI,
    secret:process.env.secret
}