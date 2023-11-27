var parola = prompt("Inserisci una parola:");

if (isPalindroma(parola)) {
    document.body.innerHTML += "<p>La parola inserita è palindroma!</p>";
} else {
    document.body.innerHTML += "<p>La parola inserita non è palindroma.</p>";
}

function isPalindroma(parola) {
    var parolaInvertita = parola.split("").reverse().join("");
    return parola === parolaInvertita;
}
