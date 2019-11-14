
let arrayNetId = []

btnSignIn.onclick=function(){
    var query = "SELECT NetID FROM students WHERE NetID= " + '"' + inptUser.value + '"'
    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=375groupb2&query=" + query);
    if (req2.status == 200) {
        arrayNetId = JSON.parse(req2.responseText)
    } else 
      NSB.MsgBox("Error: " + req2.status)
  
  //check that the user is a student
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUser.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) { 
        lblWelcome.style.display = "block"  // none to hide
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "The authentication code is " + req1.responseText
        //1 good 0 bad
        
    } else {
        //Handle that. 
        lblResult.style.display = "block"  // none to hide
        lblResult.value = "Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;
    }
}