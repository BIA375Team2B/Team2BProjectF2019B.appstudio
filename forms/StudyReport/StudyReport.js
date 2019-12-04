/*
THINGS TO DO:
- Retrieve NetID from Lizzie's form. 
- Library report

*/






let netIDTest = "ekr74869"
let i;
let hoursDateDayData =[]
let hoursDateMonthData =[]
let arrayTotalTimeDay=[]
let arrayTotalTimeMonth=[]
let s; 
let sortChoice = ["Day","Month"]
let arrayWeek=[]
let currentWeek;
let arrayWeekTotal=[];
let hoursDateWeekData =[];


StudyReport.onshow=function(){
 
//Implement dropdown
 drpSort.clear()  
  for (i = 0; i <= sortChoice.length - 1; i++) 
    drpSort.addItem(sortChoice[i])

}


drpSort.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
                              // Didn't clicked on a choice
    return                     // do nothing
  } else {
    drpSort.value = s // make dropdown show choice user made
    
    
  }
}



btnSearch.onclick=function(){
//
arrayWeek=[]
currentWeek=0;
   let userDate =inptDate.value
   let query5 = "SELECT * FROM record_date_week WHERE NetID= " + '"'+ netIDTest + '"' + "AND  date=" +'"'+userDate + '"'
    req6 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query5);
    if (req6.status == 200) {
        arrayWeek = JSON.parse(req6.responseText)
    } else {
      NSB.MsgBox("Error: " + req6.status)
      }

currentWeek = arrayWeek[0][3]
console.log(arrayWeek)
console.log(currentWeek)
arrayWeekTotal=[]
let query6 = "SELECT * FROM record_date_week WHERE NetID= " + '"'+ netIDTest + '"' + "AND week=" +'"'+currentWeek + '"'
    req7 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query6);
    if (req7.status == 200) {
        arrayWeekTotal = JSON.parse(req7.responseText)
    } else {
      NSB.MsgBox("Error: " + req7.status)
      }

console.log(arrayWeekTotal)

    for (i=0;i<arrayWeekTotal.length;i++){
      switch(arrayWeekTotal[i][4]){
  case 0:
    arrayWeekTotal[i][4] = "Mon";
    break;
    
     case 1:
    arrayWeekTotal[i][4] = "Tue";
    break;
    
     case 2:
    arrayWeekTotal[i][4]= "Wed";
    break;
    
     case 3:
    arrayWeekTotal[i][4] = "Thu";
    break;
    
    
     case 4:
    arrayWeekTotal[i][4] = "Fri";
    break;
    
    
     case 5:
    arrayWeekTotal[i][4] = "Sat";
    break;
    
     case 6:
    arrayWeekTotal[i][4] = "Sun";
   
    }
  hoursDateWeekData.push({
    Day: arrayWeekTotal[i][4], 
    Time:(arrayWeekTotal[i][1]/3600)
  })
  
  
  
}

  



  NSB.jqxSettings["Chart1"].title = "Time spent in the library for this week"
  NSB.jqxSettings["Chart1"].source = hoursDateWeekData;
  NSB.jqxSettings["Chart1"].xAxis={dataField:"Day" , showGridLines:false};
  NSB.jqxSettings["Chart1"].seriesGroups =        [
            {
                type: 'column',
               
                columnsGapPercent: 20,
                seriesGapPercent: 0,
                valueAxis:
                {
                    minValue: 0,
                    maxValue: 24,
                    unitInterval: 2,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
        
$("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);

}





btnSubmitSR.onclick=function(){
hoursDateDayData =[]
hoursDateMonthData =[]
arrayTotalTimeDay=[]
arrayTotalTimeMonth=[]

   if ( drpSort.value=="Month"){
   var query3 = "SELECT (time/3600), month FROM record_date_month WHERE NetID= " + '"'+ netIDTest + '"'
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query3);
    if (req4.status == 200) {
        arrayTotalTimeMonth = JSON.parse(req4.responseText)
    } else 
      NSB.MsgBox("Error: " + req4.status)
  
  
  for (i=0;i<arrayTotalTimeMonth.length;i++){
    
    switch(arrayTotalTimeMonth[i][1]){

     case 1:
    arrayTotalTimeMonth[i][1] = "Jan";
    break;
    
     case 2:
    arrayTotalTimeMonth[i][1]= "Feb";
    break;
    
     case 3:
    arrayTotalTimeMonth[i][1] = "Mar";
    break;
    
    
     case 4:
    arrayTotalTimeMonth[i][1] = "Apr";
    break;
    
    
     case 5:
    arrayTotalTimeMonth[i][1] = "May";
    break;
    
     case 6:
    arrayTotalTimeMonth[i][1] = "June";
    break;
    
    case 7:
    arrayTotalTimeMonth[i][1] = "July";
    break;
    
    
     case 8:
    arrayTotalTimeMonth[i][1] = "Aug";
    break;
    
     case 9:
    arrayTotalTimeMonth[i][1] = "Sept";
    break;
    
    case 10:
    arrayTotalTimeMonth[i][1] = "Oct";
    break;
    
    
     case 11:
    arrayTotalTimeMonth[i][1] = "Nov";
    break;
    
     case 12:
    arrayTotalTimeMonth[i][1] = "Dec";
    
    }
  
  hoursDateMonthData.push({
    Month: arrayTotalTimeMonth[i][1],
    Time:arrayTotalTimeMonth[i][0]
  })}

  NSB.jqxSettings["Chart1"].title = "Time spent in the library by month"
  NSB.jqxSettings["Chart1"].source = hoursDateMonthData;
  NSB.jqxSettings["Chart1"].xAxis={dataField:"Month" , showGridLines:false};
  NSB.jqxSettings["Chart1"].seriesGroups =        [
            {
                type: 'column',
               
                columnsGapPercent: 20,
                seriesGapPercent: 0,
                valueAxis:
                {
                    minValue: 0,
                    maxValue: 150,
                    unitInterval: 10,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
console.log(arrayTotalTimeMonth)
$("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
}
else if (drpSort.value=="Day"){
   var query2 = "SELECT (time/3600), date FROM record_date WHERE NetID= " + '"'+ netIDTest + '"'
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query2);
    if (req3.status == 200) {
        arrayTotalTimeDay = JSON.parse(req3.responseText)
    } else 
      NSB.MsgBox("Error: " + req3.status)
    for (i=0;i<arrayTotalTimeDay.length;i++){
  hoursDateDayData.push({
    Date: "'"+arrayTotalTimeDay[i][1]+"'", 
    Time:arrayTotalTimeDay[i][0]
  })
}

console.log(arrayTotalTimeDay)
console.log(hoursDateDayData)

  NSB.jqxSettings["Chart1"].title = "Time spent in the library by day"
  NSB.jqxSettings["Chart1"].source = hoursDateDayData;
  NSB.jqxSettings["Chart1"].xAxis={dataField:"Date" , showGridLines:false};
  NSB.jqxSettings["Chart1"].seriesGroups =        [
            {
                type: 'column',
               
                columnsGapPercent: 20,
                seriesGapPercent: 0,
                valueAxis:
                {
                    minValue: 0,
                    maxValue: 24,
                    unitInterval: 2,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
        
$("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
  }



}




