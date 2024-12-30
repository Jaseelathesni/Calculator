var display = document.getElementById('outputscreen');
function clickButton(value){
    display.value += value;
}
function clearAll(){
    display.value = "";
}
function clearButton(){
    display.value = display.value.toString().slice(0,-1)
}
function findResult(){
    try{var result = eval(display.value)
        display.value = result;
    }catch{
        display.value="error";
    }
}
