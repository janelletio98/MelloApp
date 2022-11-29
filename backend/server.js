const express = require('express');
const dummy = require('./data/dummy');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//end point
app.get('/', (req, res) => {
	res.send('API is now running');
});

//requesting dummy data from back end
app.get('/api/dummy', (req, res) => {
	res.json(dummy);
});

app.get('/api/dummy/:id', (req, res) => {
	const note = dummy.find((n) => n.id === req.params.id);
	//console.log(req.params);
	res.send(note);
});

// .env assigned PORT or PORT 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));
