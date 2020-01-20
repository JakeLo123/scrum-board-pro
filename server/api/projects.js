const router = require('express').Router();
const { Project, Task } = require('../database/models');

router.get('/:id', async (req, res, next) => {
  try {
    console.log('got it to GET /projects/:id');
    const project = await Project.findOne({
      where: {
        id: req.params.id,
      },
      include: [Task],
    });
    if (project) {
      res.json(project);
    } else {
      const err = new Error('could not find project');
      err.status = 404;
      console.log(err);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
