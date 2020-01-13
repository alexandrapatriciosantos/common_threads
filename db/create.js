const connection = require('./config');

connection.query(`
    CREATE TABLE IF NOT EXISTS to_do 
    (id INT PRIMARY KEY AUTO_INCREMENT, 
    task VARCHAR(255),
    due_date DATE, 
    is_done BOOL DEFAULT 0);
`,
(err) => {
  console.log(err);
  console.log('query completed');

  connection.end();
});
