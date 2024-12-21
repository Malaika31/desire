var username=document.getElementById("username");
var email=document.getElementById("email");
var password=document.getElementById("password");
var loginname=document.getElementById("name");
var loginEMail=document.getElementById("Email");
var logincode=document.getElementById("code");
 function signUp(){
  let usersArray = localStorage.getItem("users") || [];
 
  if (usersArray.length != 0) {
    usersArray = JSON.parse(usersArray);
  }
  for (var i = 0; i < usersArray.length; i++) {
    if (email.value == usersArray[i].userEmail) {
      alert("Email already in use");
      return;

    }
  
  }
  const userObj = {
    Name: username.value,
    userEmail: email.value,
    userPass: password.value,
  };
  usersArray.push(userObj);
  localStorage.setItem("users", JSON.stringify(usersArray));
  username.value = "";
  email.value = "";
  password.value = "";
  alert("Account created successfully!");
  console.log("Signup Working")
  window.location.replace("/login.html");
      

 
  
}

function login() {
  let usersArray = localStorage.getItem("users");
  usersArray = JSON.parse(usersArray);

console.log("Login func", usersArray)
  let flag = false;

  for (let i = 0; i < usersArray.length; i++) {
console.log(usersArray[i].userEmail,usersArray[i].userPass)
if(loginEMail.value==usersArray[i].userEmail && logincode.value ==usersArray[i].userPass){
  console.log("Login")
      flag = true;
      window.location.replace("/showroom.html");

}

    // if (
    //   loginEMail.value ==usersArray[i].userEmail &&
    //   logincode.value ==usersArray[i].userPass
    // ) {
    //   flag = true;
    //   alert("Logged in successfully");
    //   window.location.replace("/showroom.html");
      
     
    // }
  }

  if (!flag) {
    alert("Please enter valid information");
  }

  
}





 


