const router = require('express').Router();

const { User, Project } = require('../database/models');

function userNotFound(next) {
	const err = new Error('user not found');
	err.status = 404;
	next(err);
}

router.put('/login', (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email
		},
		include: [ Project ]
	}).then((user) => {
		if (!user.hasCorrectPassword(req.body.password)) {
			const err = new Error('incorrect password');
			err.status = 401;
			next(err);
		} else {
			req.session.userId = user.id;
			res.json(user.sanitize());
		}
	});
});

router.delete('/logout', (req, res, next) => {
	req.logout();
	req.session.destroy();
	res.sendStatus(201);
});

router.get('/me', async (req, res, next) => {
	try {
		if (!req.session.userId) {
			console.log('no session');
			userNotFound(next);
		} else {
			const user = await User.findOne({
				where: { id: req.session.userId },
				include: [ Project ]
			});
			if (!user) userNotFound(next);
			else res.json(user.sanitize());
		}
	} catch (err) {
		next(err);
	}
});

module.exports = router;
