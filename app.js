let numeroSecreto =0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10 ;

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento); 
    elementoHTML.innerHTML=texto;

}
function verificarIntento() {
    //let numeroDeUsuario=document.querySelector("input");
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos)
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor')
    
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    
    return;

}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value="";
    
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto =generarNumeroSecreto();
    intentos=1;

}
function reiniciarJuego(){
    //limpiar caja, quita el numero que inserta el usuario 
    limpiarCaja();
    //generar el nuevo numero 
    //iniciar el numero de intentos 
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
  

}

condicionesIniciales();



function generarNumeroSecreto() {

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1 ;

    //si ya sorteamos todos los numeros 
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p","ya se sortearon todos los numeros posibles"); 


    }else{

        // si el numero generado esta en la lista 
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;

        }

    }


    

}