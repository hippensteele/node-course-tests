var db = require('./db');
module.exports.handleSignup = (email, password) => {
    // check if the email already exists
    // save the user to a database
    db.saveUser({ email, password });
    // send the welcome email
};