 /*
 From record_date, I compute the average time spent per student per day to see how busy the library is every day. 
 I have the date but I do'nt know if it's a monday, friday,...
 */
 let arrayAvgTimeDay = []
 let avgTimeData =[]
 
 var query4 = "SELECT Avg_time_spent, date FROM record_average_time_day"
    req5 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query4);
    if (req5.status == 200) {
        arrayAvgTimeDay = JSON.parse(req5.responseText)
    } else 
      NSB.MsgBox("Error: " + req5.status)
      
console.log(arrayAvgTimeDay)
console.log(avgTimeData)

for (i=0;i<arrayAvgTimeDay.length;i++){
  avgTimeData.push({
    Date: arrayAvgTimeDay[i][1],
    Time:arrayAvgTimeDay[i][0]
  })
}


 
LibraryReport.onshow=function(){
   NSB.jqxSettings["Chart3"].title = "Average time spent per student"
  NSB.jqxSettings["Chart3"].source = avgTimeData;
  NSB.jqxSettings["Chart3"].xAxis={dataField:"Date" , showGridLines:false};
  NSB.jqxSettings["Chart3"].seriesGroups =        [
            {
                type: 'column',
               
                columnsGapPercent: 20,
                seriesGapPercent: 0,
                valueAxis:
                {
                    minValue: 0,
                    maxValue: 35,
                    unitInterval: 5,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
        
$("#Chart3").jqxChart(NSB.jqxSettings["Chart3"]);
}
