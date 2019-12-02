let arrayFirstName = []
/*
btnSignInOut.onclick=function(){
  ChangeForm()
}


btnOrderFood.onclick=function(){
  ChangeForm()
}


btnLibrary.onclick=function(){
  ChangeForm()
}



btnFindSeat.onclick=function(){
  ChangeForm()
}

btnStudyReport.onclick=function(){
  ChangeForm()
}

btnMyAccount.onclick=function(){
  ChangeForm()
}
*/



HomeScreen.onshow=function(){
  //Display current date
  let wholeCurrentDate = String(new Date());
  let currentDate = wholeCurrentDate.substring(0,21);
  lblTime.value = currentDate;
  
  
  // Get access to the firstnames in ormond table
  var query = "SELECT FirstName FROM students "
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=mye34781&pass=Tennis382006&database=375groupb2&query=" + query);
    if (req2.status == 200) {
        arrayFirstName = JSON.parse(req2.responseText)
    } else 
      NSB.MsgBox("Error: " + req2.status)

// Display "Hi Max"
  lblHiName.value = "Hi " +arrayFirstName[0][0] +" !"
  
  console.log(arrayFirstName)
}


