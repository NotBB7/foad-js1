//Utilisation de la boucle for avec la variable G
for (let g = 1; g <= 100; g++){
//Verifie si le nombre est divisible par 3 et 5
    if (g % 3 === 0 && g % 5 ===0){
        //Affiche dans la console
        console.log("FizzBuzz"); 
    }  
    //Verifie si le nombre est divisible par 3  
    else if(g % 3 === 0){
        //Affiche dans la console
        console.log("Fizz");
    }
    //Verifie si le nombre est divisible par 5
    else if (g % 5 === 0){
        //Affiche dans la console
        console.log("Buzz");
    }
    else{
        //Affiche le contenue de la variable G dans la console
        console.log(g);
    }
}