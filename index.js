const express = require('express');
const path = require('path');

// To call R code
var R = require("r-script");
global.__basedir = __dirname;

const app = express();


app.get('/', (req, res) => {
    res.send('Hello world!!!');
});

app.get('/api/R/ex-sync', (req, res) => {
    console.log(__basedir);
    console.log(path.join(__basedir, "example/ex-sync.R"));
    var out = R("example/ex-sync.R")
        .data("hello world", 20)
        .callSync();

    console.log(out);
    res.send(out);
});

// app.get('/api/R/ex-async', (req, res) => {
//     var attitude = JSON.parse(
//         require("fs").readFileSync("example/attitude.json", "utf8"));
      
//       R("example/ex-async.R")
//         .data({df: attitude, nGroups: 3, fxn: "mean" })
//         .call(function(err, d) {
//           if (err) throw err;
//           console.log(d);
//         });
//     console.log(out);
//     res.send(true);
// });

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));