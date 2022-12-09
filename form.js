
const form = document.querySelector(".form") /* her henter vi formen og gemmer den i variable, sammen med de andre 4 elementer */
const firstName = document.querySelector("#fname")
const lastName = document.querySelector("#lname")
const tlfNumber = document.querySelector("#number")
const emailField = document.querySelector("#email")

const errorMsg = document.querySelector("#errorMsg")
form.addEventListener("submit", formValidation) /* her lytter vi til submit eller send knappen  */

function formValidation(e){
    e.preventDefault() /* preventDefault ligger i en mappen e, og den forhindre siden i at refresh */

    /* her fortaler vi de 4 elementer at de skal sende en error besked hvis en af felterne ikke er blivet udfyldt. PS. */
    if(firstName.value == "" || lastName.value == "" || tlfNumber.value == "" || emailField.value == ""){
        errorMsg.innerText = "Please fill in all fields"
    }
    else if(!/^[a-zA-Z]*$/.test(firstName.value)){
        errorMsg.innerText = "Please express your name in letters only"
    }
    else {
        errorMsg.innerText = "thank you, your massage was sent"
        errorMsg.style.color = "green"
        firstName.value = ""
        lastName.value = ""
        tlfNumber.value = ""
        emailField.value = ""
    }
    
}