var fs = require('fs');
fs.readFile('/Users/pdonni/Documents/Github/learnNode/file.txt',{encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
  console.log(data);
});