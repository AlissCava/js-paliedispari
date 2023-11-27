var parola = prompt("Inserisci una parola:");

if (isPalindroma(parola)) {
    document.body.innerHTML += "<h2>La parola inserita è palindroma!</h2>";
} else {
    document.body.innerHTML += "<h2>La parola inserita non è palindroma.</h2>";
}

function isPalindroma(parola) {
    var parolaInvertita = parola.split("").reverse().join("");
    return parola === parolaInvertita;
}
