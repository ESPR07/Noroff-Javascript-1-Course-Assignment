const container = document.querySelector(".contactContainer");
const form = document.querySelector(".contactForm");
const fullName = document.querySelector("#fullName");
const adress = document.querySelector("#adress");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const textArea = document.querySelector("#textArea")
const nameError = document.querySelector("#nameError");
const adressError = document.querySelector("#adressError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const textAreaError = document.querySelector("#textAreaError");
const h4 = document.querySelector("h4");

function lengthCheck(value, compareValue){
    //Inefficient way of checking:
    
    // if(value.trim().length > compareValue){
    //     return true;
    // }   else {
    //     return false;
    // }

    // Efficient way of checking the same thing:

    return value.trim().length > compareValue;
}

function emailCheck(email) {
    const pattern = /\S+@\S+\.\S+/;
    const patternMatch = pattern.test(email);
    return patternMatch;
}

function valdiationCheck(event){
    event.preventDefault();
    
        if(lengthCheck(fullName.value, 0)){
            nameError.style.display = "none";
        }   else {
            nameError.style.display = "block";
        }

        if(lengthCheck(adress.value, 25)) {
            adressError.style.display = "none";
        }   else {
            adressError.style.display = "block";
        }

        if(emailCheck(email.value) === true){
            emailError.style.display = "none";
        }   else {
            emailError.style.display = "block";
        }

        if(lengthCheck(subject.value, 10)){
            subjectError.style.display = "none";
        }   else {
            subjectError.style.display = "block";
        }

        if(lengthCheck(textArea.value, 0)) {
            textAreaError.style.display = "none";

        }   else {
            textAreaError.style.display = "block";
        }

        if(lengthCheck(fullName.value, 0) && lengthCheck(adress.value, 10) && emailCheck(email.value) && lengthCheck(subject.value, 10) && lengthCheck(textArea.value, 0) === true){
            h4.style.display = "block";
        } else {
            h4.style.display = "none";
        }
}


form.addEventListener("submit", valdiationCheck);