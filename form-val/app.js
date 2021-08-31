const candidateSubmitButton = document.querySelector('.submit-candidate-btn')
const candidateForm = document.querySelector('.myform-candidate')
const inputs = candidateForm.querySelectorAll('input')
const hiddenWrap = document.querySelector('.wrap-hide')

const validateForm = () => {
    valid = true
    inputs.forEach(element => {
        if(element.value == ""){
            valid = false
        }
    });
    if(valid) {
        hiddenWrap.style.display="block"
    } else {
        alert('please fill the form.')
    }
    
}

candidateSubmitButton.addEventListener('click', validateForm)