const connection = require('../db/config');

const Task = {};

Task.getAll = (callback) => {
  connection.query(`
  SELECT * 
  FROM to_do
  `,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};

Task.task = (callback) => {
  connection.query(`
  SELECT task 
  FROM to_do
`,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};

Task.contains = (callback) => {
  connection.query(`
  SELECT * 
  FROM to_do 
  WHERE task LIKE "%laundry%"
  `,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};
Task.startsWith = (callback) => {
  connection.query(`
  SELECT * 
  FROM to_do 
  WHERE task LIKE "b%"
  `,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};

Task.greaterThan = (callback) => {
  connection.query(`
  SELECT * 
  FROM to_do 
  WHERE due_date > "2020-01-13" 
  `,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};

Task.getAllOrdered = (callback) => {
  connection.query(`
  SELECT * 
  FROM to_do
  ORDER BY id ASC 
  `,
  (err, results, fields) => {
    callback(err, results, fields);
  });
};

Task.create = (task, callback) => {
  connection.query(
    `INSERT INTO to_do ( task, due_date, is_done )
                VALUES (
                    ?,
                    ?,
                    ?
                )`,
    [
      task.task,
      task.due_date,
      task.is_done,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Task.edit = (task, taskid, callback) => {
  connection.query(
    `UPDATE to_do
    SET task = ?
    WHERE id = ?`,
    [
      task,
      taskid,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Task.toggle = (task, callback) => {
  connection.query(
    `UPDATE to_do
    SET  is_done = !is_done
    WHERE id = ?`,
    [
      task.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Task.delete = (task, callback) => {
  connection.query(
    `DELETE FROM to_do
     WHERE id = ?`,
    [
      +task.id,
    ],
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};

Task.delfalse = (callback) => {
  connection.query(
    `DELETE FROM to_do
     WHERE is_done=0`,
    (err, results, fields) => {
      callback(err, results, fields);
    },
  );
};


// // DELETE packaged
// router.delete('/api/stock/del/packaged', (req, res) => {
//   connection.query('DELETE FROM stock WHERE packaged=0', (err, results) => {
//     if (err) {
//       res.status(500).json ({error: err});
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

module.exports = Task;
