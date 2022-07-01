//user details object
let userDB = {};

function getUserDetails(){

    let userName = prompt('enter your username')//collect user name

    //terminate the program when user click cancel
    if(userName == null){
        return ;
    }

    //validate username
    function validateUserName(userName) {
        if (userName.length < 10 && userName.length >= 2 ) {
            return true;
        } else {
            return false;
        }
    }
    
    //while loop keeps running while username is wrong
    while (validateUserName(userName) == false){
        userName = prompt('please enter username from 2 to 10 digits only')  
    }

    //saving the username in the userDB
    userDB['userName'] = userName;



    let email = prompt('enter your email')
    if(email == null){
        return;
    }
    // /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.) +([a-zA-Z0-9]{2,4})+$/;
    
    //function to validate email
    function validateEmail(email){
        const emailCheck = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        emailCheckResult = emailCheck.test(email);
        if(emailCheckResult == true){
            return true;
        } else {
            return false;
        }
    }

    while(validateEmail(email) == false){
        email = prompt('please enter valid email')
    }
    //saving email in the userDB
    userDB['email'] = email;



    let phoneNumber = prompt('enter your phone number')
    if(phoneNumber == null){
        return;
    }

    function validatePhoneNumber(phoneNumber){
        if(phoneNumber.length == 11 ){
            return true;
        } else {
            return false;
        }

    }

    while(validatePhoneNumber(phoneNumber) == false) {
        phoneNumber = prompt('enter valid phone number, number must be 11 digit ')
    }

    //saving phone number in the userDB
    userDB['phoneNumber'] = phoneNumber;




    let password = prompt('enter your password')
    if(password == null){
        return;
    }

    function validatePassword(password){
        if(password.length < 6){
            return false;
        } else {
            return true;
        }
    }

    while(validatePassword(password) == false){
        password = prompt('invalid password, password must not be less than 6 digits')
    }
    userDB['password'] = password;


    let confirmPassword = prompt('confirm your password')
    if(confirmPassword == null){
        return; 
    }

    function validateConfirmPassword(confirmPassword){
        if(confirmPassword === password){
            return true;
        } else {
            return false;
        }
    }

    while(validateConfirmPassword(confirmPassword) == false){
        confirmPassword = prompt('confirm  password did not match, please try again')
    }
    userDB['confirmPassword'] = confirmPassword;

    // console.log(userDB)


}

function displayUserDetails(){
    alert(`Below Are Details\n\nUsername: ${userDB.userName}\nEmail: ${userDB.email}\nPhone Number: ${userDB.phoneNumber}`)

}