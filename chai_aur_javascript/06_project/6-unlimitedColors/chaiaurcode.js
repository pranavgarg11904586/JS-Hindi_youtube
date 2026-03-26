//generate a random color
let color;
const randomColor = function(){
    const hex ="0123456789ABCDEF";
     color = '#'
    for(let i =0;i<6;i++){
        color+= hex[Math.floor(Math.random() *16)]
    }
    return color;
};


let intervalId;
let setColor;
const startChangingColor = function(){
    if(!intervalId){
        setColor = document.body.style.backgroundColor;
        intervalId = setInterval(changeBgColor,1000)
    }

    document.getElementById('change').innerHTML = "changing color start";
    

    function changeBgColor(){
    document.body.style.backgroundColor=randomColor();
        
    }
}

const stopChangingColor = function(){
    document.getElementById('change').innerHTML = "color changing stopped";
    clearInterval(intervalId);
    document.body.style.backgroundColor = setColor;

    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)

console.log(randomColor());



