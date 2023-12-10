//It represents the string in text box
let string = "";
//Selects all buttons having class .button
let buttons = document.querySelectorAll('.row');

// When I click the button, it will appear in the textbox
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == 'Enter'){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            document.querySelector('input').value = string; 
        }
        else if(e.target.innerHTML == "DEL"){
            const textToDelete = string.slice(-1);
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})
const snowContainer = document.getElementById("snow-container");
const snowContent = ['❄', '❅', '❆']

const random = (num) => {
  return Math.floor(Math.random() * num);
}

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
}

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)]
    snowContainer.append(snow);
  }
}
  
  window.addEventListener("load", () => {
    createSnow(30)
    
  });
  window.addEventListener("click", () => {
    removeSnow()
  });


