// App.JS //

// --- Requierements ---- //
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');


// Database Connect
mongoose.connect(config.database);
mongoose.connection.on('connected', () =>{
	console.log('Connected to Db: ' + config.database);
});
mongoose.connection.on('error', (err) =>{
	console.log('Error to connect Db: ' + err);
});


const app = express();

const users = require('./routes/users');

// Server port
const port = 3000;

// Middleware -> Cors
app.use(cors());

// MiddleWare -Q bodyParser
app.use(bodyParser.json());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));




app.use('/users', users);

// Index Route
app.get('/', (req, res)=>{
	res.send('Home page lol');
});

app.listen(port, ()=>{
	console.log('Serveur started on port ' + port);
})