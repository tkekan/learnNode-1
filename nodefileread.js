var fs = require('fs');
var jf = require('jsonfile')
var val = require('validator')
var jsonObject=[];
var lineNumber=0;
var columns=[];

// object for creating HighChart bar graph
var chartObject = {
                    chart: {
                        type: "column"
                    },
                    title: {
                        text: "CPU Utilization"
                    },
                    xAxis: {
                        categories: []
                           },
                    yAxis: {
                        title: {
                            text: "Percentage"
                        }
                    },
                    series: [{
                        name: "CPU Percentage",
                        data: []
                    }]        };



var Lazy = require('lazy'),
lazy = new Lazy(fs.createReadStream('/Users/pdonni/Documents/Github/learnNode/Book2.csv'))
    .lines
    .map(String)
    .map(function(lineData){
        var fields = lineData.trim().split(',', 11);
        if(lineNumber == 0)
        {
            columns.push(fields[3]);
            columns.push(fields[10]);     
        } else {
            // var jsoninput = {
            //     MEM : fields[3],
            //     CPU : fields[10]
            // };
            // jsonObject.push(jsoninput);
            // 
            chartObject.xAxis.categories.push(fields[10]);  
            chartObject.series[0].data.push(val.toFloat(fields[3]));  
            var file = '/Users/pdonni/Documents/Github/learnNode/data.json';
            jf.writeFile(file, chartObject);
        }
        lineNumber = lineNumber + 1;
        
    });
