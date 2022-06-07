const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// &---- Database ----
const db = require('./config/database');

const app = express();

// &---- Test DB ----
db.authenticate()
	.then(() => console.log(`Connected`))
	.catch((err) => console.log(err));

// &---- Routes ----
app.get('/', (req, res) => {
	res.send(`Hallo`);
});

app.use('/gigs', require('./routes/gigs'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on http://localhost:${PORT}`));
