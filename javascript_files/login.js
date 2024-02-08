document.getElementById("contact-submit").addEventListener("click", function (e) {

    let accountUsername = document.getElementById("account-username").value;
    let accountPassword = document.getElementById("account-password").value;
    let contactStatus = document.getElementById("loginbox");

    if (accountUsername == ""){
        document.getElementById("account-username").style = "background:red;";
        document.getElementById("account-username").placeholder = "Field cannot be empty";
    }

    if (accountPassword == ""){
        document.getElementById("account-password").style = "background:red;";
        document.getElementById("account-password").placeholder = "Field cannot be empty";
    }

    if (accountUsername != "" && accountPassword != ""){
        if (accountUsername == "Username" && accountPassword == "Password"){
            contactStatus.textContent = 'Login Successful!';
        }
        else{
            contactStatus.textContent = 'Login Unsuccessful!';
        }
    }

    //Fade in and out
    contactStatus.style.opacity = 0; 
    contactStatus.style.display = "block";

    setTimeout(() => {
        contactStatus.style.opacity = 1; // Fade in after 1 second
        setTimeout(() => {
            contactStatus.style.opacity = 0; // Fade out starts
            setTimeout(() => {
                contactStatus.style.display = "none"; // Hide completely after fade-out
            }, 1000); 
        }, 2000);
    });

    e.preventDefault();
});