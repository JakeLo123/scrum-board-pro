const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const db = require('./database/db');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const dbStore = new SequelizeStore({ db });
dbStore.sync();

const passport = require('passport');
passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser(async (id, done) => {
	try {
		const user = await db.models.user.findByPk(id);
		done(null, user);
	} catch (err) {
		done(err);
	}
});

function createApp() {
	app.use(
		session({
			secret: process.env.SESSION_SECRET || 'a very insecure secret',
			store: dbStore,
			resave: false,
			saveUninitialized: false
		})
	);

	app.use(morgan('dev'));
	app.use(express.static(path.join(__dirname, '..', 'public')));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.use(passport.initialize());
	app.use(passport.session());

	app.use('/auth', require('./auth'));
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
	db.sync({ force: true });
	console.log('database synced!');
	app.listen(port, () => {
		console.log(`app is listening on port ${port}!`);
	});
}

createApp();
bootApp();
