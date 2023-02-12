import express from 'express';
import mysql from 'mysql';
const app = express();

let connection = mysql.createConnection({
    host     : 'mydatabase.cfbfliwr9bm9.ap-northeast-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'password',
    database: 'map'
  });

app.get('/', function(req, res){
    res.json("hello world");
});

app.get('/all', function(req, res){
  res.send(data);
});

app.get('/:id', function(req, res){
    res.send(data.all[req.params.id-1]);
})

let port = process.env.PORT || 5001;

app.listen(port);

if(port === 5001){
  console.log('RUN on port 5001');
}
let data = {};
connection.query('select * from domain', function(err, rows) {
  if (err) throw err;
  data.all = rows;
});
