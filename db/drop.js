const connection = require('./config');

connection.query(`
    DROP TABLE to_do;
`,
(err) => {
  console.log(err);
  console.log('query completed');

  connection.end();
});
