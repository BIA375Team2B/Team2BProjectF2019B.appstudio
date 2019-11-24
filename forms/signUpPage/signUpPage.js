
btnAddAccount.onclick=function(){
  let queryAdd = "INSERT INTO students VALUES('"+inptNetID.value+"', '"+inptFirstName.value+"', '"+inptLastName.value+"', '"+inptEmail.value+"', "+inptGradYear.value+", '"+inptMajor.value+"', '"+inptPass1.value+"')";
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=375groupb2&query=" + queryAdd)
  if (req1.status == 200) {
    if (req1.responseText == 500) {
      let result = JSON.parse(req1.responseText)
      NSB.MsgBox("You have successfully added your account!")
     ChangeForm(HomeScreen)
    } else 
     alert("Error: Your information wasn't able to be added.")
    
  } else
    alert("Error: " + req1.status)
  
}
