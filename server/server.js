const express = require('express');

const port = process.env.PORT || 8080;

var app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/nopage', (req, res) => {
    res.status(404).send({ error: 'Page not found.'});
});

app.get('/stillnopage', (req, res) => {
    res.status(404).send({ 
        error: 'Page not found.', 
        name: 'Todo App v.1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
       { name: 'Tom', age: 53 },
       { name: 'Monica', age: 57 }
        ]);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports.app = app;