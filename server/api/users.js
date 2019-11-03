const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.json({
		status: 200,
		message: 'got to /api/users'
	});
});

module.exports = router;
