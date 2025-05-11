const passwordBtn1 = document.getElementById("password1-btn"); 
const passwordBtn2 = document.getElementById("password2-btn"); 

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g",
    "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
    "!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[",
    "}","]",",","|",":",";","<",">",".","?","/"];

let password1 = "";  
let password2 = ""; 

function generatePassword() {

    passwordBtn1.textContent = ""; 
    passwordBtn2.textContent = ""; 
    password1 = ""; 
    password2 = ""; 

    for (i = 0; i < 15; i++) {

        nr1 = Math.floor(Math.random()*90);
        password1 += characters[nr1]; 
        nr2 = Math.floor(Math.random()*90); 
        password2 += characters[nr2]; 

        passwordBtn1.textContent = password1; 
        passwordBtn2.textContent = password2; 

        passwordBtn1.removeAttribute("hidden"); 
        passwordBtn2.removeAttribute("hidden"); 
    }
}