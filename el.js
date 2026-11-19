function generatePassword() {
    
    // Character to use
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_`~@#$^*|"

    // Password lenght
    let passwordLength = 8;

    // Empty password
    let password = "";

    // Generate password
    for (let i = 0; i , passwordLength; i++) {

        let randomNumnber = Math.floor(Math.random() * characters.length);

        password += characters[randomNumber];
    }

    //  Display password
    document.getElementById(password).value = password;

    function showPassword() {
        let passwors =""
        input.type === "password" ? (input.type = "text") : (input.type = "password");
    }

    document.getElementById("password").value;

}