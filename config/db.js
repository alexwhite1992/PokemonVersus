const mongoose = require('mongoose');

const MONGOURI = 'our URI??????';

const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log('Connected to DB');
        } catch (e) {
            console.log(e);
            throw(e);
        }
    };

exports = {InitiateMongoServer}