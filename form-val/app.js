const candidateSubmitButton = document.querySelector('.submit-candidate-btn')
const candidateForm = document.querySelector('.myform-candidate')
const inputs = candidateForm.querySelectorAll('input')
const hiddenWrap = document.querySelector('.wrap-hide')
const timelineAddButton = document.querySelector('.add_button')
const timelineSaveButton = document.querySelector('.save_button')
const timelineEditButton = document.querySelector('.edit_button')
const timelineInputs = timelineForm.querySelectorAll('input')
const validateForm = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    valid = true
    inputs.forEach(element => {
            if(element.value == ""){valid = false}
    });
    
    if(document.myformCandidate.email.value.match(mailformat)){
        valid = true
    } else {valid = false}

    if(valid) {
        hiddenWrap.style.display="block"
    } else {
        alert('please fill the form.')
    }

}

const showTimelineForm = () => {
    document.querySelector('.timeline-div').style.display="block"
}

const disableTimelineElements = () => {
    valid = false
    timelineInputs.forEach(element => {
        if(element.value != ""){
            valid=true
        }
    })
    if(valid){
        timelineInputs.forEach(element => {
            element.readOnly=true
        })
        alert("documents has been saved and in readonly mode.")
    } else {
        alert("please fill the required timeline inputs.")
    }
}

const editTimelineElements = () => {
    timelineInputs.forEach(e => {
        e.readOnly=false
    })
}
candidateSubmitButton.addEventListener('click', validateForm)
timelineAddButton.addEventListener('click', showTimelineForm)
timelineSaveButton.addEventListener('click', disableTimelineElements)
timelineEditButton.addEventListener('click', editTimelineElements)
