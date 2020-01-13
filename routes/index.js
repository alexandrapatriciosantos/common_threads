const express = require('express');
const {
  getAllTasks,
  getTask,
  containsTask,
  startsWith,
  greaterThan,
  getAllOrdered,
  create,
  edit,
  del,
  toggle,
  delfalse,
} = require('../controllers/tasks-controller');

const router = express.Router();

router.get('/', (req, res) => res.send('hello'));

router.get('/all', getAllTasks);

router.get('/task', getTask);

router.get('/contains', containsTask);

router.get('/starts', startsWith);

router.get('/greater', greaterThan);

router.get('/all_ordered', getAllOrdered);

router.post('/create', create);

router.put('/edit/:id', edit);

router.put('/toggle', toggle);

router.delete('/delete', del);

// not working
router.delete('/deletefalse', delfalse);

module.exports = router;
