var fs = require('fs');
var jf = require('jsonfile')


fs.readFile('/Users/pdonni/Documents/Github/learnNode/file.txt',{encoding: 'utf8'}, function (err, data) {
  if (err) throw err;
  //console.log(data);
});
var jsonObject=[];





var Lazy = require('lazy'),

lazy = new Lazy(fs.createReadStream('/Users/pdonni/Documents/Github/learnNode/file.txt'))
    .lines
    .map(String)
    .map(function(lineData){
     	var fields = lineData.trim().split(',', 4);
     	var jsoninput = {
     		col1: fields[0],
     		col2: fields[1],
     		col3: fields[2],
     		col4: fields[3]
     	};
     	
     	jsonObject.push(jsoninput);
     	console.log(jsonObject);
     	var file = '/Users/pdonni/Documents/Github/learnNode/data.json';
		jf.writeFile(file, { data : jsonObject }, function(err) {
  
		})

     })
 




 //console.log(jsonObject);
