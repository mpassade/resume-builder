const clearBtn = document.querySelector('.clear-form')

const clearAll = function(){
    document.querySelector('.person-name').value = ""
    document.querySelector('.person-address').value = ""
    document.querySelector('.person-email').value = ""
    document.querySelector('.person-number').value = ""
    document.querySelector('.person-title').value = ""
    document.querySelector('.person-intro').value = ''

    for (const x of document.querySelectorAll('.one-or-more-input')){
        if (x !== document.querySelectorAll('.one-or-more-input')[0]){
            inputParentCont.removeChild(x)
        }
    }
    document.querySelectorAll('.person-skills')[0].value = ''
    const removeSkillBtns = document.querySelectorAll('.remove-skill')
    if (removeSkillBtns.length===1){
        removeSkillBtns[0].classList.replace('remove-skill', 'initial-add-skill')
        const initialAddSkill = document.querySelector('.initial-add-skill')
        initialAddSkill.innerText = '+'
        const newSkillBtn = document.querySelector('.add-skill')
        inputParentCont.removeChild(newSkillBtn)
        initialAddSkill.addEventListener('click', addSkill)
        initialAddSkill.removeEventListener('click', removeSkill)
    }

    for (const x of document.querySelectorAll('.job-fields')){
        if (x !== document.querySelectorAll('.job-fields')[0]){
            inputParentCont.removeChild(x)
        }
    }
    if (document.querySelectorAll('.remove-work').length===1){
        document.querySelector('.job-fields').removeChild(document.querySelector('.remove-work'))
    }
    document.querySelector('.company').value = ''
    document.querySelector('.position').value = ''
    document.querySelector('.work-start').value = ''
    document.querySelector('.work-end').value = ''
    document.querySelector('.work-desc').value = ''

    for (const x of document.querySelectorAll('.school-fields')){
        if (x !== document.querySelectorAll('.school-fields')[0]){
            inputParentCont.removeChild(x)
        }
    }
    if (document.querySelectorAll('.remove-school').length===1){
        document.querySelector('.school-fields').removeChild(document.querySelector('.remove-school'))
    }
    document.querySelector('.school').value = ''
    document.querySelector('.school-end').value = ''
    document.querySelector('.degree').value = ''

    for (const x of document.querySelectorAll('.cert-fields')){
        if (x !== document.querySelectorAll('.cert-fields')[0]){
            inputParentCont.removeChild(x)
        }
    }
    if (document.querySelectorAll('.remove-cert').length===1){
        document.querySelector('.cert-fields').removeChild(document.querySelector('.remove-cert'))
    }
    document.querySelector('.cert-name').value = ''
    document.querySelector('.cert-year').value = ''
}

clearBtn.addEventListener('click', clearAll)