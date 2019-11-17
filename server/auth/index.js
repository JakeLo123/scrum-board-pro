const router = require('express').Router();

const { User, Project } = require('../database/models');

router.put('/login', (req, res, next) => {
	User.findOne({
		where: {
			email: req.body.email
		},
		include: [ Project ]
	}).then((user) => {
		res.json(user);
	});
});

router.delete('/logout', (req, res, next) => {
	req.logout();
	req.session.destroy();
	res.sendStatus(201);
});

module.exports = router;
