let button =  document.getElementById("butt");



function verifyPassword(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (password == "") {
        alert("Error: The password field is Empty.");
    } else if (password == confirmPassword) {
        alert("Logged In");
    } else {
        alert("Please make sure your passwords match.")
    }
}

button.addEventListener("click", verifyPassword);