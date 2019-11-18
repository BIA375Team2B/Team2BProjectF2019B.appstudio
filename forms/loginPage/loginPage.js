/*
let arrayResults = []

btnSignIn.onclick=function(){
    var query = "SELECT NetID, password FROM students WHERE NetID= " + '"' + inptUser.value + '"' AND password= " + '"' + inptPass.value + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=375groupb2&query=" + query);
    if (req1.status == 200) {
        arrayResults = JSON.parse(req1.responseText)
        if (arrayResults.length == 0) {
            NSB.MsgBox("Sorry, you're not in our system. Sign up to be added.")
            ChangeForm(signUpPage)
        } else if (arrayResults.length == 2) 
            ChangeForm(HomeScreen)
          else 
            NSB.MsgBox("Error: Sorry, your account is not available.")
    } else 
      NSB.MsgBox("Error: " + req1.status)
}
*/
/*
btnSignUp.onclick=function(){
  ChangeForm(signUpPage)
}
*/