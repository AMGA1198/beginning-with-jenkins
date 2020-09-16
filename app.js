var express = require('express');
var app = express();

var integrantes = [
  { name: "Alvaro Mauricio", lastname: "Galarza Almanza", codigo: "C7474-8" },
  { name: "Dayana Stefka", lastname: "Ledezma Bohorquez", codigo: "A19083-7" },
  { name: "Morelia", lastname: "Hidalgo Caceres", codigo: "C7504-3" }
];

app.get('/',function(req,res) {
  res.send(integrantes);
});

app.listen(4000);
// init on port 4000
