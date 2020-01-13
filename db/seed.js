const connection = require('./config');

connection.query(`
    INSERT INTO to_do (task, due_date, is_done) 
    VALUES 
    ("buy cereal", "2020-01-12", 0), 
    ("pay rent", "2020-01-13", 1),
    ("laundry", "2020-01-14", 1),
    ("cook dinner", "2020-01-15", 1)
`,
(err) => {
  console.log(err);
  console.log('database seed completed');
  connection.end();
});
