/* Exercici 1*/

var nom= ['V','i','c','t','o','r'];

for (var i=0; i< nom.length;i++) {
console.log(nom [i]);
}
   
/*Exercici 2*/ 
const miNombre = ["V", "i", "c", "t", "0", "r",];

miNombre.map((letra) => {
    /* []      - Caracteres dentro de los brackets*/
    letra.match(/[aeiou]/i)
        ? console.log("He encontrado la VOCAL: ", letra)
        : console.log("He encontrado la CONSONANTE", letra);
   
});


/*Exercici 3*/

let lletres = new Map();
        miNombre.forEach( letter => {
            if (lletres.has(letter)) {
                let letterCount= lletres.get(letter);
                lletres.set(letter, letterCount +1);


            } else {
                lletres.set(letter,1);
            }

        })
        console.log(lletres);
    

/*Exercici 4*/ 

let nombre= ["V", "i", "c", "t", "0", "r",];
let apellido= [" ","C","a","m","p","s"];

let combinado= nombre.concat(apellido);
console.log 
console.log (combinado)