const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    database: "burger_db",
    user: "root",
    port: 3306,
    password: "Colton24!",
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(
    "connected to database with connection threadId = " + connection.threadId
  );
});

module.exports = connection;
