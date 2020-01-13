const Task = require('../models/Task');

const getAllTasks = (req, res, next) => {
  Task.getAll((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const getTask = (req, res, next) => {
  Task.task((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const containsTask = (req, res, next) => {
  Task.contains((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const startsWith = (req, res, next) => {
  Task.startsWith((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const greaterThan = (req, res, next) => {
  Task.greaterThan((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const getAllOrdered = (req, res, next) => {
  Task.getAllOrdered((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

const create = (req, res) => {
  Task.create(req.body, (err) => {
    if (err) {
      res.render('error', err);
    }
    return res.json({ task: req.body });
  });
};

const edit = (req, res) => {
  Task.edit(req.body, req.params.id, (err) => {
    if (err) {
      res.render('error', err);
    }
    return res.json({ task: req.body });
  });
};

const toggle = (req, res) => {
  Task.toggle(req.body, (err) => {
    if (err) {
      res.render('error', err);
    }
    return res.json({ task: req.body });
  });
};

const del = (req, res) => {
  Task.delete(req.body, (err) => {
    if (err) {
      res.render('error', err);
    }
    return res.json({ task: req.body });
  });
};

const delfalse = (req, res, next) => {
  Task.delfalse((err, results) => {
    if (err) return next(err);
    return res.json({ task: results });
  });
};

module.exports = {
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
};
