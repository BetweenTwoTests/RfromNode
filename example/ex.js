var R = require("r-script");

var out = R("example/ex-sync.R")
  .data("hello world", 20)
  .callSync();
  
console.log(out);