const express = require('express');
const app = express();
const path = require('path');

// Settings
const port = process.env.PORT || 4000
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server
app.listen(port, () => {
    console.log('El servidor arrancó en el puerto: ', port);
})