function equivalentCheck(){/*This helps to keep
    the last number until the other number
    pressed even after an operation is pressed*/
    if (parseInt(document.getElementById('equivalent').value)){
        document.getElementById('equivalent').value = 0;
        document.getElementById('results').value = 0;
    }
}

function input(x){

    equivalentCheck();

    let y = parseFloat(document.getElementById('results').value);

    if (document.getElementById('decimalVar').value == 0){
        x += y * 10; //Multiply the text input by 10 and then add the x.
        document.getElementById('results').value = x; //Return x to the text output.
    }
    else{//If decimal is true.

        let decimalCount = parseInt(document.getElementById('decimalVar').value);

        if (decimalCount == 1){

            x *= 1/10; //We are using math to place the decimal point.
            y += x;
            document.getElementById('results').value = y;
        }
        else {
            document.getElementById('results').value += x;
        }

        decimalCount ++ ;
        document.getElementById('decimalVar').value = decimalCount;

    }
}

function decimal(){
    if (document.getElementById('decimalVar').value == 0){//This prevents multiple decimal points.
        document.getElementById('decimalVar').value = 1;
    }
    //document.getElementById('results').value = document.getElementById('results').value + '.';
    if (parseInt(document.getElementById('operation').value)){  //If this an empty string, it will return false.
        document.getElementById('results').value = 0;
    }
}

function allclear(){
    document.getElementById('results').value = 0;
    document.getElementById('operation').value = 0;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 0;
    document.getElementById('decimalVar').value=0;

}
function square(){
    var y= parseFloat(document.getElementById('results').value)
    document.getElementById('results').value = y*y;
}
function percent(){
    var y= parseFloat(document.getElementById('results').value)
    document.getElementById('results').value = y*0.01;
}

function operandCheck(){
    if(document.getElementById('operand').value == ""){
        document.getElementById('operand').value = document.getElementById('results').value;
        document.getElementById('equivalent').value = 1;

    }
    else {
        operatorCheck();
    }
}

function operatorCheck(){
    let a = parseFloat(document.getElementById('operand').value);
    let b = parseFloat(document.getElementById('results').value);

    switch(parseInt(document.getElementById('operation').value)){
        case 1:
            a += b;
            break;
        
        case 2: 
            a -= b;
            break;
        
        case 3: 
            a *= b;
            break;
        
        case 4: 
            a /= b;
            break;
                
    }
        //After the case there will be changes to a's value.
    document.getElementById('operand').value = a;
    document.getElementById('results').value = a;
    document.getElementById('equivalent').value = 1;

}

function operator(x){
    switch(x){
        case 1: //addition
            document.getElementById('operation').value = 1;
            break;
        case 2: //substraction
            document.getElementById('operation').value = 2;
            break;
        case 3: //multiplication
            document.getElementById('operation').value = 3;
            break;
        case 4: //division
             document.getElementById('operation').value = 4;
            break;
        default:
    }
    operandCheck();
}

function plusminus(){
    document.getElementById('results').value = -1*(parseFloat(document.getElementById('results').value));
}

function equal(){

    operator(parseInt(document.getElementById('operation').value));
    //document.getElementById('operand').value = document.getElementById('results').value;
    document.getElementById('operand').value = "";
    document.getElementById('equivalent').value = 1;

}