//Ingreso de datos
let sexo
let peso
let resultado 
let altura

do {
     sexo = prompt("Indique si es hombre o mujer").toLowerCase()
}while ((sexo!="hombre") && (sexo!="mujer"));
altura = parseInt(prompt("Indique su altura en centímetros"))
peso = parseInt(prompt("Indique su peso"));
altura = altura / 100
let indice = (peso / (altura*altura));

function CalcularIMC() {
  switch (sexo) {
    case 'hombre':
    if (indice < 20) { 
      resultado = "Su peso inferior al normal"
    }
    else if (indice >= 20 && indice < 24) {
      resultado = "Su peso es normal"  
    }
    else if (indice >= 24 && indice < 29) {
      resultado = "Su peso es superior al normal"
    }
    else {
      resultado = "Obesidad"  
    }
    break
    case 'mujer':
    if (indice < 21) {
       resultado = "Su peso es inferior al normal" 
    }
    else if (indice >= 21 && indice < 25) {
       resultado = "Su peso es normal" 
    }
    else if (indice >= 25 && indice < 30) {
        resultado ="Su peso es superior al normal"
    }
    else {
        resultado ="Obesidad"
    }
    break
    
}


return alert("Su IMC es: " + indice.toFixed(2) + " y su clasificación es: " + resultado)
}
resultado = CalcularIMC(sexo, altura, peso);


