const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');

function createApp() {
	app.use(morgan('dev'));
	app.use(express.static(path.join(__dirname, '..', 'public')));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use('/api', require('./api'));

	app.get('*', (req, res) => {
		res.sendFile(path.join(__dirname, '../public/index.html'));
	});

	app.use((err, req, res, next) => {
		console.error(err);
		console.error(err.stack);
		res.status(500).send(err.message || 'internal server error');
	});
}

const port = process.env.PORT || 3030;

function bootApp() {
	app.listen(port, () => {
		console.log(`app is listening on port ${port}`);
	});
}

createApp();
bootApp();
