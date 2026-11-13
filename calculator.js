let display =document.querySelector("#display")
let buttons =document.querySelectorAll(".input button");
buttons.forEach(function(button){
    button.addEventListener("click",function(){
        if(button.innerText == "dlt"){
           display.value = display.value.slice(0, -1);
        }
        else if(button.innerText == "AC"){
            display.value = " ";
        }
        else if(button.innerText == "+" || 
            button.ineerText == "*" ||
            button.innerText =="-" ||
            button.innerText == "% "){
            display.value += button.innerText;
        }
        else if(button.innerText == "="){
           display.value = eval(display.value)

        }
        else{
        display.value += button.innerText;
        }
    });
});

    



