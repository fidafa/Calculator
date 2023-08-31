// display
function display(num){
    output.value +=num;
}

// clear =CL
function clearAll(){
    output.value=''
}
// eval--predefined function---perform operations
function evaluateExp(){

    // method 1
    // Exp=output.value     exp=7+7
    // result=eval(exp)     result=14
    // output.valueresult   display=14

    // method 2
    output.value=eval(output.value)
}


// remove last item

function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}