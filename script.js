
var display = document.getElementById('display')
var numeros = document.querySelectorAll('[id*=tecla]')
var operadores = document.querySelectorAll('[id*=operador]')

var novoNumero = true;
var operador
var numeroAnterior;



function calcular(){
    if(operador != undefined){
       var numeroAtual = parseFloat(display.textContent)
       novoNumero = true;
       if(operador == '+'){
          atualizarDisplay(numeroAnterior + numeroAtual)
          operador = undefined;
       } else if (operador == '-'){
          atualizarDisplay(numeroAnterior - numeroAtual)
          operador = undefined;
       } else if (operador == '*'){
        atualizarDisplay(numeroAnterior * numeroAtual)
        operador = undefined
       } else if (operador == '/'){
        atualizarDisplay(numeroAnterior / numeroAtual)
        operador = undefined;
       } 
    }
}

function atualizarDisplay(texto){
    if(novoNumero == true){
        display.textContent = texto;
        novoNumero = false; 
    }else{
        display.textContent += texto;
    }
}

function inserirNumero(evento){
    atualizarDisplay(evento.target.textContent)
}

numeros.forEach(function(numero){
    numero.addEventListener('click', inserirNumero)
})

function selecionarOperador(evento){
     if(novoNumero == false){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent)
    }
}

operadores.forEach(function(operador){
    operador.addEventListener('click', selecionarOperador)
})





document.getElementById('igual').addEventListener('click', calcular);
document.getElementById('limparDisplay').addEventListener('click', calcular)