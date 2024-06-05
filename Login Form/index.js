let registrationform = document.getElementById("registration-form");
let authenticationForm = document.getElementById("autentication-form");
let loginForm = document.getElementById("login-form");
let userNameEl = document.getElementById("username");
let passwordEl = document.getElementById("password");
// let passwordAlertEl = document.getElementById("passworAlert");
let emailEl = document.getElementById("email");
let registerButtonEl = document.getElementById("register-button");
let userDisplayEl = document.getElementById("dispalyUser");
let loginPageBtnEl = document.getElementById("login-page-button");
let newRegistrationBtn = document.getElementById("new-registration-button");
let userLoginBtn = document.getElementById("login-button");
let userLoginUserNameEl = document.getElementById("user-login-username");
let userLoginPasswordEl = document.getElementById("user-login-password");
let forgotPasswordEl = document.getElementById("forgot-password");
let displayPasswordEl = document.getElementById("display-password");

//intergate the password length checking - by adding paragraph text below the password item.
//intergrate the userdisplay with a portfolio look scenario
//before displaying the profile, authenticating with login credentials with a login form need to be done.

//let userList = [{"username": "", "password": ""}];
//we need to update the userlist, once check the dictionaries concept and todolist points, react concepts as well.

registerButtonEl.addEventListener("click", function(event) {
    event.preventDefault();
    let checkUserName = localStorage.getItem("username");
    let statusOfUserName = JSON.parse(checkUserName);

    if (userNameEl.value === "") {
        alert("Enter Valid Name");
    } else if (statusOfUserName === userNameEl.value) {
        alert("User Already exists, try login");
        loginForm.classList.remove("nodisplay");
        registrationform.classList.add("nodisplay");
        userLoginUserNameEl.textContent = userNameEl.value;
    } else if (passwordEl.value === "") {
        alert("Set A Password to register");
    } else if (passwordEl.value.length < 4) {
        alert("Password Length is too short");
        // passwordAlertEl.textContent = "password length is too short to proceed, maintain a 4 digit passcode";
        // passwordAlertEl.style.color = "red"; // throwing error taking space and form is getting wider, see that.
    } else {
        registrationform.classList.add("nodisplay");
        userDisplayEl.textContent = userNameEl.value;
        userDisplayEl.style.color = "skyblue";
        authenticationForm.classList.remove("nodisplay");
        localStorage.setItem("username", JSON.stringify(userNameEl.value)); // we need to change these lines. key and get item
        localStorage.setItem("password", JSON.stringify(passwordEl.value)); // saving key password will allow us only to save one user.
        // lets make a list of users or changing the pattern of saving the password with user name.
    }
});


loginPageBtnEl.addEventListener("click", function(event) {
    event.preventDefault();
    userNameEl.value = "";
    passwordEl.value = "";
    emailEl.value = "";
    loginForm.classList.remove("nodisplay");
    authenticationForm.classList.add("nodisplay");
});


newRegistrationBtn.addEventListener("click", function() {
    registrationform.classList.remove("nodisplay");
    authenticationForm.classList.add("nodisplay");
    userNameEl.value = "";
    passwordEl.value = "";
    emailEl.value = "";
});


userLoginBtn.addEventListener("click", function() {
    let checkUserName = localStorage.getItem("username");
    let statusOfUserName = JSON.parse(checkUserName);

    let checkUserPassword = localStorage.getItem("password");
    let statusOfUserPassword = JSON.parse(checkUserPassword);

    if (userLoginUserNameEl.value !== statusOfUserName) {
        alert("Incorrect UserName or Password");
    } else if (userLoginPasswordEl.value !== statusOfUserPassword) {
        alert("Incorrect UserName or Password");
    } else {
        console.log("user validated - Displaying Login Page");
        // here we need to add the user portfoli code related stuff
    }
});


forgotPasswordEl.addEventListener("click", function() {
    // let checkUserPassword = localStorage.getItem("password");
    // let statusOfUserPassword = JSON.parse(checkUserPassword);
    // displayPasswordEl.textContent = "Enter UserName";
    console.log("Forgot button triggered");
});

//implement the forgot passoword option that displays the statusOfUserPassword
