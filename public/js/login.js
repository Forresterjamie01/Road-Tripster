// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const password = document.querySelector('#password-login').value.trim();   // Collect data from login form

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/profile'); // When successful, route the browser to the profile page
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// $(".signup-form").on("submit", (event) => {
//   event.preventDefault();
//   let record ={
//     firstname=$("firstname-input").val(),
//     lastname=$("lastname-input").val(),
//     email=$("email").val(),
//     password=$("passwprd").val(),
//   }
//   console.log("UI - record",record)

//   const name = document.querySelector('#name-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();
//    console.log("BTN -clcik")
//   if (name && email && password) {
//     const response = await fetch('/users', {
//       method: 'POST',
//       body: JSON.stringify({ name, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       console.log("USer created")
//       document.location.replace('/profile');
//     } else {
//       alert(response.statusText);
//     }
//   }
// });

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginFormHandler);

// document
//   .querySelector('.signup-form')
  //.addEventListener('submit', signupFormHandler);

  $("#login").on("click",function(event){
    event.preventDefault()
 
    var nemail= $("#email-input-2").val()
    var  npassword = $("#password-input-2").val()
    
    console.log("User",nemail,npassword)
    $.ajax({
        url:"/api/users/"+nemail+"/"+npassword,
        type:"get"
      
    }).then(function(savedrecord){
        console.log("Login",savedrecord)
       window.location = "/search"
    })
 })
 