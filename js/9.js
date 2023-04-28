//String Kebab-case
let kebab = '';

//Boucle for pour itérer de 1 à 10 + création de la variable H
for (let h = 1; h <= 10; h++){
    if (h > 1) {
        kebab += '-';
    }
    kebab += h.toString();
}

//Affiche dans la console

console.log(kebab)