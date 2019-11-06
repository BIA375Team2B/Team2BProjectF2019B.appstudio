
btnSignIn.onclick=function(){
    req1 = ""
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUser.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) { 
      if (req1.status == 500)
        ChangeForm(HomeScreen)
      else
        NSB.MsgBox("Sorry, that is not valid login information.")
    lblResult.value = "The authentication code is " + req1.responseText
        //1 good 0 bad
        
    } else {
      NSB.MsgBox("Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText;)
    }
}
