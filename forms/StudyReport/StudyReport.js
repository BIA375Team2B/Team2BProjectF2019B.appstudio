/*
var sampleData,row;



Button1.onclick=function(){
  //Render the chart.  
  $("#Chart1").jqxChart(NSB.jqxSettings["Chart1"]);
}




StudyReport.onshow=function(){
      sampleData = [
      { Day:'Mon', Keith:30,},
      { Day:'Tue', Keith:25},
      { Day:'Wed', Keith:30},
      { Day:'Thu', Keith:35},
      { Day:'Fri', Keith:20},
      { Day:'Sat', Keith:30},
      { Day:'Sun', Keith:60}
  ];



  NSB.jqxSettings["Chart1"].source = sampleData;
  NSB.jqxSettings["Chart1"].categoryAxis={dataField:"Day" , showGridLines:false};
  NSB.jqxSettings["Chart1"].seriesGroups =        [
            {
                type: 'column',
                columnsGapPercent: 30,
                seriesGapPercent: 0,
                valueAxis:
                {
                    minValue: 0,
                    maxValue: 100,
                    unitInterval: 10,
                    description: 'Time in minutes'
                },
                series: [
                        { dataField: 'Keith', displayText: 'Keith'},
                      
                    ]
            }
        ]
}

*/
//Retrieve Start time and end time 
 var query2 = "SELECT Start_ Time FROM record WHERE NetID =  "
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query2);
    if (req2.status == 200) {
        arrayFirstName = JSON.parse(req2.responseText)
    } else 
      NSB.MsgBox("Error: " + req2.status)


