
myAccountPage.onshow=function(){
//show current date
  let wholeCurrentDate = String(new Date());
  let currentDate = wholeCurrentDate.substring(0,21);
  lblCurTime.value = currentDate;
  
//show current name
  var queryName = S
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=375groupb2&query=" + queryName)
}
