var nameError=document.getElementById("name-error")
var emailError=document.getElementById("email-error")
var subjectError=document.getElementById("subject-error")
var messageError=document.getElementById("message-error")
var submitError=document.getElementById("submit-error")
function validateName(){
    var name=document.getElementById("name-field").value
    if(name.lenght==0){
        nameError.innerHTML="Name is required"
        return false
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write full name"
        return false
    }
    nameError.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>'
    return true
}
function validateSubject(){
    var subjecto=document.getElementById("subject-field").value
    var required =10
    var left = required - subjecto.length
    if(left > 0){
        subjectError.innerHTML=left+"Character is required"
        return false
    }
    subjectError.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>'
    return true

}

function validateEmail(){
    var email=document.getElementById("email-field").value
    if(email.length == 0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML='Email Inavlid'
        return false;
    }
    emailError.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>'
    return true

}
function validateMessage(){
    var subjecto=document.getElementById("message-field").value
    var required =30
    var left1 = required - subjecto.length
    if(left1 > 0){
        messageError.innerHTML=left1+"Character is required"
        return false
    }
    messageError.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#75FB4C"><path d="M389-267 195-460l51-52 143 143 325-324 51 51-376 375Z"/></svg>'
    return true

}
function validateForm(){
    if(!validateName() || !validateSubject() || !validateMessage() || !validateEmail()){
        submitError.style.display="block"
        submitError.innerHTML="Please fix the error to sumbit"
        setTimeout(function(){submitError.style.display="none";},3000)
        return false
    }
}