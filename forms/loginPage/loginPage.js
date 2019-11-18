/*
let arrayNetId = []

btnSignIn.onclick=function(){
    var query = "SELECT NetID FROM students WHERE NetID= " + '"' + inptUser.value + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=375groupb2&query=" + query);
    if (req1.status == 200) {
        arrayNetId = JSON.parse(req1.responseText)
        if (arrayNetId.length == 0) {
            NSB.MsgBox("Sorry, you're not in our system. Sign up to be added.")
            ChangeForm(signUpPage)
        } else 
            ChangeForm(HomeScreen)
    } else 
      NSB.MsgBox("Error: " + req1.status)
}
*/