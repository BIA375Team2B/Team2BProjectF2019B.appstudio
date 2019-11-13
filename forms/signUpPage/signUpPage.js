
let accountInfo = []

btnAddAccount.onclick=function(){
  let queryAdd = "INSERT INTO students VALUES("inptFirstName.value", "inptLastName.value", "inptEmail.value", "inptGradYear.value", "inptMajor.value")";
  req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ekr74869&pass=Boolarina18%&database=ekr74869&query=" + query)
  if (req1.status == 200) {
    if (req1.status == 500)
     alert("It's been successfully added!")
   else 
     alert("Error: It wasn't able to be added.")
   else
     alert("Error: " + req1.status)
}
