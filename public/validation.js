(function() {
  "use strict";
  
  var nameField = document.getElementById('nameField');
  var emailField = document.getElementById('emailField');
  var nameCorrect, emailCorrect = false;
  var submitButton = document.getElementById('submitButton');
 
  nameField.addEventListener('keyup', checkName);
  emailField.addEventListener('keyup', checkEmail);
  document.addEventListener('keyup', function() {
      buttonEnable();
  });
  
  function checkName() {
    if(nameField.value.length > 0) {
      console.log('name is ok');
      nameCorrect = true;
    } else {
      console.log('name is too short');
      nameCorrect = false;
    }
  }
  
  function validateEmail(email) {
      var re =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      if(re.test(email)) {
        return true;
      } else {
        return false;
      }
  }
  
  function checkEmail() {
    var email = document.getElementById('emailField').value;
    if(validateEmail(email) === true) {
      console.log('email correct');
      emailCorrect = true;
    } else {
      emailCorrect = false;
      console.log('email incorrect');
    }
  }
  
  function buttonEnable() {
    
    if(nameCorrect && emailCorrect) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }
  
})();