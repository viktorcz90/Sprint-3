/*Ejercicio 1*/

console.log('Hola mundo');
/*Ejercicio 2*/

alert("Hola mundo");

/*Ejercicio 3*/
var nombre;
nombre='Victor';
var apellido;
apellido='Camps';

document.querySelector("body").innerHTML= nombre + ' ' + apellido;

/*Ejercicio 4*/

var numero1= 10;
var numero2= 20;
var result= numero1 + numero2;

console.log('La suma de 10 más 20 es '+ result) ;


/*Ejercicio 5*/
var notaExamen= 6;
if (notaExamen>=5) {
    alert('Has aprovado el examen con un 6');
}
else{
    alert ('Has suspendido el examen');
}

/*Ejercicio 6*/

var ejercicio='Tinc un cotxe de color blau';

console.log(ejercicio);

ejercicio= ejercicio.replace ('blau','verd');

console.log(ejercicio);

ejercicio=ejercicio.replace (/o/g,"u");

console.log(ejercicio);

/* Ejercicio 7*/

var objectes = ['taula', 'cadira', 'ordinador', 'libreta'] ;
for (var i =0; i< objectes.length; i++) {
    console.log('L objecte '+objectes [i]+ ' està a la posició '+i);
}


/* Ejercicio 8 calculadora nivel 1 */

function calculadora (operador, valor1, valor2) {

    let resultado;

    if (operador == '+') {
        resultado=valor1+valor2;
    }
    else if (operador == '-') {
        resultado=valor1-valor2;
    }    
    else if (operador == '*') {
        resultado=valor1*valor2;
    }    

    console.log (++resultado);
}

calculadora ('+',1,1);
calculadora ('-',1,1);
calculadora ('*',1,1);


/* 

function calculadora () {

    let resultado;
    var valor1= prompt("valor 1", "Val");
    var valor2= prompt("valor 2", "Val");
    var operador= prompt("operador","Val");
    
    valor1=parseInt(valor1);
    valor2=parseInt(valor2);
        
    if (valor2==0) {
        alert("no puedes dividir por 0");
        calculadora();
        }

        else if (operador == '+') {
            resultado=valor1+valor2;
        }
        else if (operador == '-') {
            resultado=valor1-valor2;
        }    

        else if (operador == '*') {
            resultado=valor1*valor2;
        }    
        else if (operador == '/') {
            resultado=valor1/valor2;
        }    
        alert("el resultado es: "+resultado);
    }
    
  */