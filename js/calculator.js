    // get the buttons
let buttons = document.querySelectorAll('button');
    // get a screen print
let myScreen = document.getElementById('screen');
    // start lop ob the buttons
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        if ([i] == 14 || [i] == 15 || [i] == 16){
        }else if(myScreen.textContent.length > 10){
            alert('You have reached the maximum number of numbers')
        }else{
            myScreen.innerHTML += this.textContent;
        }
    })
}   
buttons[14].addEventListener('click', function(){
    myScreen.innerHTML = myScreen.textContent.substr(0,
    myScreen.textContent.length -1)
})      // Completing the calculation
buttons[15].addEventListener('click', function(){
    myScreen.textContent = eval(myScreen.textContent);
})
buttons[16].addEventListener('click', function(){
    myScreen.textContent = '';
    
})
