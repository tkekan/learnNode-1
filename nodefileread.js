var fs = require('fs');
fs.readFile('/Users/pdonni/Documents/Github/learnNode/file.txt',{encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
  //console.log(data);
});

var Lazy = require('lazy'),

lazy = new Lazy(fs.createReadStream('/Users/pdonni/Documents/Github/learnNode/file.txt'))
    .lines
    .map(String)
    .map(function(lineData){
     	var fields = lineData.trim().split(',', 4);
     	console.log(fields[0]);
     	return {
     		parsed: {
     			col1: fields[0],
     			col2: fields[1],
     			col3: fields[2],
     			col4: fields[3]
     		}
     	}
     })
 
