
btnSignIn.onclick=function(){
    
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUser.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) { 
      if (req1.responseText == 1)
        ChangeForm(HomeScreen)
      else
        NSB.MsgBox("Sorry, that is not valid login information.")
        //1 good 0 bad
        
    } else {
      NSB.MsgBox("Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText)
    }
}

btnSignUp.onclick=function(){
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptUser.value + "&j_password=" + inptPass.value);
    if (req1.status == 200) { 
      if (req1.responseText == 1)
        ChangeForm(signUpPage)
      else
        NSB.MsgBox("Sorry, that is not valid login information.")
        //1 good 0 bad
        
    } else {
      NSB.MsgBox("Error Connection Not Made: " + req1.status + " readystate " + req1.readyState + " status text " + req1.statusText)
    }
}
