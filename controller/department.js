var mysql = require("mysql");

module.exports = {
  list: (req, res) => {
    var con = mysql.createConnection({
      host: `localhost`,
      user: `root`,
      password: `Cr3n3x@1`,
      database: `tapsoft`
    });
    con.connect(async (err) => {
      if (err) return;
      var queryString = `SELECT * FROM department`;
      con.query(queryString, async (err, result) => {
        if (err) return;
        res.send(result);
      });
    });
  }

}