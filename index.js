// Let's code the calculator

// It is the input tag in which the user enter the values
let screenValue = "";

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
try{
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        // console.log('Pressed button', buttonText)
        if(buttonText == 'X'){
            screenValue += "*";
            screen.value  = screenValue;
        }
        else if(buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'bs'){
            screenValue = '';
            screen.value = screenValue;
        }
        
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}
}catch(e){
    alert('invalid number');
    screenValue = '';
    screen.value = screenValue;
}
