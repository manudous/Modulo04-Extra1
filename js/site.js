// // Módulo 4 extra 1

// // Declaramos variables

var operant1;
var result;
var operation = '';
var initialOperation = true;

var input = document.getElementById('result');
var focus = () => document.getElementById("result").focus();
var operant = () => document.getElementById('result').value;


// Funciones Suma, Resta, Multiplicación y División

var sum = (a , b) => a + b;
var subs = (a , b) => a - b;
var multi = (a , b) => a * b;
var div = (a , b) => a / b;

// Función para borrar después de cada operación realizada

function clear (){
    input.value = '';
}


// Events

document.getElementById('sum-button').addEventListener('click', sumOperation);
document.getElementById('subs-button').addEventListener('click', sumOperation);
document.getElementById('multi-button').addEventListener('click', multiOperation);
document.getElementById('div-button').addEventListener('click', divOperation);
document.getElementById('equal-button').addEventListener('click', equalOperation);
document.getElementById('reset-button').addEventListener('click', reset);

// Operations

function sumOperation(){
    operant1 = parseInt(operant());
    if(initialOperation){
        result = sum(operant1, 0);
        operation = '+';
        initialOperation = false;
        clear();
        focus();
        
    }else{
        resultado();
        operation = '+';
        focus();
    }
}

function subsOperation(){
    operant1 = parseInt(operant());
    if(initialOperation){
        result = subs(operant1, 0);
        operation = '-';
        initialOperation = false;
        clear();
        focus();
    }else{
        resultado();
        operation = '-'; 
        clear();  
        focus(); 
    }   
}

function multiOperation(){
    operant1 = parseInt(operant());
    if(initialOperation){
        result = multi(operant1, 1);
        operation = '*';
        initialOperation = false;
        clear();
        focus();
    }else{
        resultado();
        operation = '*';  
        focus();  
    }     
}

function divOperation(){
    operant1 = parseInt(operant());
    if(initialOperation){
        result = div(operant1, 1);
        operation = '/';
        initialOperation = false;
        clear();
        focus();
    }else{
        resultado();
        operation = '/';
        focus();       
    }   
}

function equalOperation(){
    operant1 = parseInt(operant());
    resultado();
    input.value = result;
    focus();
}

function reset(){
    result = 0;
    operant1 = 0;
    operation = '';
    initialOperation = true;
    clear();
    focus();
}

function resultado(){
    switch(operation){
        case "+":
            result = sum(result, operant1);
            break;
        case "-":
            result = subs(result, operant1);
            break;
        case "*":
            result = multi(result, operant1);
            break;
        case "/":
            result = div(result, operant1);
            break;
    }
    clear();
    console.log(result);
}




