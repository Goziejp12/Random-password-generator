/* Array of letters, numbers and symbols that is used for the password combinations */
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+",
"=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let randomPassword1 = document.getElementById("random-Password1")
let randomPassword2 = document.getElementById("random-Password2")
let generatePassBtn = document.getElementById("generatePass-btn")
let passwordLength = 16


/* Rendering the "Generate passwords" button */
generatePassBtn.addEventListener("click", function() {
    randomPassword1.textContent = generatePass()
    randomPassword2.textContent = generatePass() 
})

/* This function generates the random password */
function generatePass() {
    let password = " "
    for (let i = 1; i < passwordLength; i++) {
        let randomNUM = Math.floor(Math.random() * characters.length)
        password += characters[randomNUM]  
    }
    return password
}
