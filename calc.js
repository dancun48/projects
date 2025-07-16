// calculator program

const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'Error';
    }
}

function clearDisplay(){
    display.value = '';
}

//executing javascript from a string is an enormous security risk
//it is far too easy for a bad actor to run arbitrary code when you use eval()