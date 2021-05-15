$("#next-button").on("click",function(event){
   event.preventDefault()

   var newUser = {
       firstname: $("#firstname-input").val(),
       lastname: $("#lastname-input").val(),
       email: $("#email-input").val(),
       password: $("#password-input").val()
   }
   console.log(newUser)
   $.ajax({
       url:"/api/users/",
       type:"post",
       data:newUser
   }).then(function(savedrecord){
       console.log("Saved",savedrecord)
      window.location = "/login"
   })
})


