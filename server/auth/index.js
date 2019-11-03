const router = require('express').Router();

const { User } = require('../database/models');

router.put('/login', async (req, res, next) => {
	try {
		const user = await User.findOne({
			where: { email: req.body.email }
		});
		if (!user) {
			res.status(401).send('user not found...');
		} else if (!user.correctPassword) {
			res.status(401).send('incorrect password...');
		} else {
			req.login(user, function(err) {
				if (err) {
					return next(err);
				} else {
					res.json(user);
				}
			});
		}
	} catch (err) {
		next(err);
	}
});

router.post('/signup', async (req, res, next) => {
	try {
		const user = await User.create(req.body);
		req.login(user, function(err) {
			if (err) {
				return next(err);
			} else {
				res.json(user);
			}
		});
	} catch (err) {
		if (err.name === 'SequelizeUniqueConstraintError') {
			res.status(401).send('User already exists');
		} else {
			next(err);
		}
		next(err);
	}
});

router.delete('/logout', (req, res, next) => {
	req.logout();
	req.session.destroy();
	res.sendStatus(201);
});

router.get('/me', (req, res, next) => {
	res.json(req.user);
});

module.exports = router;
