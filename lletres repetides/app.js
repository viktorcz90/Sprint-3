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

/*Nivel 2*/
const r = /\b[\w.!#$%*+-_\=?{}]+@[\w-]+(?:\.[\w]+)+\b/gi;
const str = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"; 

console.log (str.match(r));



/*interficie gráfica*/
/* 1- Nom array*/
const button1= document.querySelector('#button1');
button1.addEventListener('click', e =>{
var nom= ['V','i','c','t','o','r'];

for (var i=0; i< nom.length;i++) {
console.log(nom [i]);
}
});

const button2= document.querySelector('#button2');
button2.addEventListener('click', e =>{
const miNombre = ["V", "i", "c", "t", "0", "r",];

miNombre.map((letra) => {
    /* []      - Caracteres dentro de los brackets*/
    letra.match(/[aeiou]/i)
        ? console.log("He encontrado la VOCAL: ", letra)
        : console.log("He encontrado la CONSONANTE", letra);
    });
});
/*Map*/
const button3= document.querySelector('#button3');
button3.addEventListener('click', e =>{
const miNombre = ["V", "i", "c", "t", "0", "r",];

miNombre.map((letra) => {
    /* []      - Caracteres dentro de los brackets*/
    letra.match(/[aeiou]/i)
  
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
    });        
/* 4- Fusión array*/
const button4= document.querySelector('#button4');
button4.addEventListener('click', e =>{
    let nombre= ["V", "i", "c", "t", "0", "r",];
let apellido= [" ","C","a","m","p","s"];

let combinado= nombre.concat(apellido);
console.log 
console.log (combinado)
});

/* 5- Cantos correos electronicos hay?*/
const button5= document.querySelector('#button5');
button5.addEventListener('click', e =>{
const r = /\b[\w.!#$%*+-_\=?{}]+@[\w-]+(?:\.[\w]+)+\b/gi;
const str = "Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email"; 

console.log (str.match(r));
});

