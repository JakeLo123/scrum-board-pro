const router = require('express').Router();
const Op = require('sequelize').Op;
const { User, Project, Task } = require('../database/models');

function userNotFound(message) {
  const err = new Error(message);
  err.status = 404;
  console.error(err);
}

router.get('/me', async (req, res, next) => {
  try {
    if (!req.session.userId) {
      console.log('NO SESSION FOUND...');
    } else {
      const user = await User.findOne({
        where: { id: req.session.userId },
        include: [
          {
            model: Project,
            include: [
              { model: Task },
              {
                model: User,
                attributes: ['email'],
              },
            ],
          },
        ],
      });
      if (!user) userNotFound('user not found...');
      else res.json(user.sanitize());
    }
  } catch (err) {
    next(err);
  }
});

router.put('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
      include: [
        {
          model: Project,
          include: [User.email],
        },
      ],
    });
    if (!user) {
      userNotFound('user not found...');
      res.sendStatus(404);
    } else if (!user.hasCorrectPassword(req.body.password)) {
      userNotFound('incorrect password...');
      res.sendStatus(404);
    } else {
      req.session.userId = user.id;
      res.json(user.sanitize());
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/logout', (req, res, next) => {
  req.session.destroy();
  res.sendStatus(201);
});

module.exports = router;
