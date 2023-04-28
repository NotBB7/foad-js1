//String Kebab-case
let kebabCaseString = '';

//Boucle for pour itérer de 1 à 10 + création de la variable H
for (let h = 1; h <= 10; h++){
    if (h > 1) {
        kebabCaseString += '-';
    }
    kebabCaseString += h.toString();
}

//Affiche dans la console

console.log(kebabCaseString)