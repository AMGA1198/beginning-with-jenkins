var express = require('express');
var app = express();

// let {
//   more : 'More',
//   "integrantes"
// }
app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(4000);
// init on port 4000
