let netIDTest = "ekr74869"
let arrayTime = []
let arrayStartTime =[]
let arrayEndTime =[]
/*
THINGS TO DO:
- Condition if the guy left or arrive at the lib after midnight (otherwise ther's going to be problems with substraction)
- Retrieve NetID from Lizzie's form. 
- Add label saying "you've studied x hours this month
- By week ? 
*/



let netIDTest = "ekr74869"
let i;
let hoursDateDayData =[]
let hoursDateMonthData =[]
let arrayTotalTimeDay=[]
let arrayTotalTimeMonth=[]
let s; 
let sortChoice = ["Day","Month"]

// Retrieve total time spent in the lib per day (in hour)
 var query2 = "SELECT (time/3600), date FROM record_date WHERE NetID= " + '"'+ netIDTest + '"'
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query2);
    if (req3.status == 200) {
        arrayTotalTimeDay = JSON.parse(req3.responseText)
    } else 
      NSB.MsgBox("Error: " + req3.status)
      
 // Retrieve total time spent in the lib per month     
 var query3 = "SELECT time, month FROM record_date_month WHERE NetID= " + '"'+ netIDTest + '"'
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query3);
    if (req4.status == 200) {
        arrayTotalTimeMonth = JSON.parse(req4.responseText)
    } else 
      NSB.MsgBox("Error: " + req4.status)

console.log(hoursDateMonthData)
console.log(arrayTotalTimeDay)
console.log(arrayTotalTimeMonth)

StudyReport.onshow=function(){
  for (i=0;i<arrayTotalTimeDay.length;i++){
  hoursDateDayData.push({
    Date: arrayTotalTimeDay[i][1],
    Time:arrayTotalTimeDay[i][0]
  })
}

for (i=0;i<arrayTotalTimeMonth.length;i++){
  hoursDateMonthData.push({
    Month: arrayTotalTimeMonth[i][1],
    Time:arrayTotalTimeMonth[i][0]
  })
}

/*
drpSort.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
                              // Didn't clicked on a choice
    return                     // do nothing
  } else {
    drpSort.value = s // make dropdown show choice user made
    
    
  }
}

if (s=="Day"){
*/
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
                    maxValue: 35,
                    unitInterval: 5,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
        
$("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
/*
}
*/
/*
else if (s=="Month"){
  NSB.jqxSettings["Chart2"].title = "Time spent in the library by Month"
  NSB.jqxSettings["Chart2"].source = hoursDateMonthData;
  NSB.jqxSettings["Chart2"].xAxis={dataField:"Month" , showGridLines:false};
  NSB.jqxSettings["Chart2"].seriesGroups =        [
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
        
$("#Chart2").jqxChart(NSB.jqxSettings["Chart2"]);
}
*/
//Implement dropdown
 drpSort.clear()   
  for (i = 0; i <= sortChoice.length - 1; i++) 
    drpSort.addItem(sortChoice[i])

}


<<<<<<< Updated upstream

btnClear.onclick=function(){
  drpSort.clear()
  drpSort.value="Sort by"
}






/*
let flavors = ["Acai Berry","Almond","Amaretto","Anise","Apple","Apricot","Banana",
"Bacon","Bavarian Cream","Berry Cola","Birch Beer","Black Licorice","Black Cherry",
"Black Currant","Black Walnut","Blackberry","Blue Raspberry",
"Blueberry","Bourbon","Bubble Gum","Butter","Butter Almond",
"Butter Milk","Butter Pecan","Butter Rum","Butter Toffee","Butterscotch"]

// populate the flavors dropdown at runtime when form loads/is shown
// using the flavors array
dropdownDemo.onshow=function(){
    drpBestFlavor.clear()   
  for (i = 0; i <= flavors.length - 1; i++) 
    drpBestFlavor.addItem(flavors[i])
}

// see what user clicked on in the majors dropdown
// notice I added an 's' parameter to the function (holds the chosen text)
drpBestMajor.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
                              // Didn't clicked on a choice
    return                     // do nothing
  } else {
    drpBestMajor.value = s   // make dropdown show choice user made
    NSB.MsgBox("s is " + s + " and .selection is " + drpBestMajor.selection)
  }
}

// clear out the dropbox choices and reset title to 'Worst Major'
btnClearDropdown.onclick=function(){
    drpBestMajor.clear()
    drpBestMajor.value = "Worst Major"
}
*/

<<<<<<< Updated upstream
//Retrieve Start time and end time 
 var query2 = "SELECT Start_Time, End_Time FROM record WHERE NetID= " + '"'+ netIDTest + '"'
=======
drpSort.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
                              // Didn't clicked on a choice
    return                     // do nothing
  } else {
    drpSort.value = s // make dropdown show choice user made
    
    
  }
}


btnSubmitSR.onclick=function(){
hoursDateDayData =[]
hoursDateMonthData =[]
arrayTotalTimeDay=[]
arrayTotalTimeMonth=[]
  if ( drpSort.value=="Month"){
   var query3 = "SELECT time, month FROM record_date_month WHERE NetID= " + '"'+ netIDTest + '"'
    req4 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query3);
    if (req4.status == 200) {
        arrayTotalTimeMonth = JSON.parse(req4.responseText)
    } else 
      NSB.MsgBox("Error: " + req4.status)
  
  
  for (i=0;i<arrayTotalTimeMonth.length;i++){
  hoursDateMonthData.push({
    Month: arrayTotalTimeMonth[i][1],
    Time:arrayTotalTimeMonth[i][0]
  })}

  NSB.jqxSettings["Chart1"].title = "Time spent in the library by day"
  //NSB.jqxSettings["Chart1"].source = hoursDateDayData;
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
                    maxValue: 35,
                    unitInterval: 5,
                    description: 'Time in hours'
                },
                series: [
                        { dataField: 'Time', displayText: 'Time'},
                      
                    ]
            }
        ]
        
$("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
}
else if (drpSort.value=="Day"){
   var query2 = "SELECT (time/3600), date FROM record_date WHERE NetID= " + '"'+ netIDTest + '"'
>>>>>>> Stashed changes
    req3 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query2);
    if (req3.status == 200) {
        arrayTime = JSON.parse(req3.responseText)
    } else 
      NSB.MsgBox("Error: " + req3.status)
      
let i;

for (i=0;i <arrayTime.length;i++){
  arrayStartTime.push(arrayTime[i][0])
  arrayEndTime.push(arrayTime[i][1])
}
console.log(arrayStartTime)
console.log(arrayEndTime)

=======
>>>>>>> Stashed changes




