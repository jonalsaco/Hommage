function checkPassword() {
    const input = document.getElementById('password').value;
    if(input.toLowerCase() === "indice") {
        alert("Mot de passe correct ! Vous pouvez passer à la page suivante.");
        window.location.href = "page2.html"; // redirection
    } else {
        alert("Mot de passe incorrect, cherchez mieux !");
    }
}
