const form = document.querySelector(".contactForm");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const textArea = document.querySelector("#textArea")
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const textAreaError = document.querySelector("#textAreaError");

function lengthCheck(value, compareValue){
    if(value.trim().length > compareValue){
        return true;
    }   else {
        return false;
    }
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

        if(emailCheck(email.value) === true){
            emailError.style.display = "none";
        }   else {
            emailError.style.display = "block";
        }

        if(lengthCheck(subject.value, 0)){
            subjectError.style.display = "none";
        }   else {
            subjectError.style.display = "block";
        }

        if(lengthCheck(textArea.value, 0)) {
            textAreaError.style.display = "none";
        }   else {
            textAreaError.style.display = "block";
        }
}

form.addEventListener("submit", valdiationCheck);