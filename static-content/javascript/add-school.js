const addSchoolBtn = document.querySelector('.add-school')

const addSchool = function(){
    const educationContainer = document.createElement('div')
    educationContainer.className = 'school-fields'

    const schoolContainer = document.createElement('div')
    schoolContainer.classList.add('resume-builder-input-child', 'one-input')
    const schoolLabel = document.createElement('label')
    schoolLabel.htmlFor = 'school'
    schoolLabel.innerText = 'School'
    const schoolInput = document.createElement('input')
    schoolInput.type = 'text'
    schoolInput.className = 'school'
    schoolInput.name = 'school'

    const gradContainer = document.createElement('div')
    gradContainer.classList.add('resume-builder-input-child', 'one-input')
    const gradLabel = document.createElement('label')
    gradLabel.htmlFor = 'school-end'
    gradLabel.innerText = 'Graduation Year'
    const gradInput = document.createElement('input')
    gradInput.type = 'text'
    gradInput.className = 'school-end'
    gradInput.name = 'school-end'

    const degreeContainer = document.createElement('div')
    degreeContainer.classList.add('resume-builder-input-child', 'one-input')
    const degreeLabel = document.createElement('label')
    degreeLabel.htmlFor = 'degree'
    degreeLabel.innerText = 'Degree/Diploma'
    const degreeInput = document.createElement('input')
    degreeInput.className = 'degree'
    degreeInput.name = 'degree'

    const rmvSchBtn = document.createElement('button')
    rmvSchBtn.className = 'remove-school'
    rmvSchBtn.innerText = 'Remove School'
    const rmvSchBtn2 = document.createElement('button')
    rmvSchBtn2.className = 'remove-school'
    rmvSchBtn2.innerText = 'Remove School'

    if (document.querySelectorAll('.school-fields').length===1){
        document.querySelectorAll('.school-fields')[0].appendChild(rmvSchBtn2)
    }
    inputParentCont.insertBefore(educationContainer, addSchoolBtn)
    educationContainer.appendChild(schoolContainer)
    schoolContainer.appendChild(schoolLabel)
    schoolContainer.appendChild(schoolInput)
    educationContainer.appendChild(gradContainer)
    gradContainer.appendChild(gradLabel)
    gradContainer.appendChild(gradInput)
    educationContainer.appendChild(degreeContainer)
    degreeContainer.appendChild(degreeLabel)
    degreeContainer.appendChild(degreeInput)
    educationContainer.appendChild(rmvSchBtn)

    for (const x of document.querySelectorAll('.remove-school')){
        x.addEventListener('click', rmvschool)
    }
}

const rmvschool = function(e){
    inputParentCont.removeChild(e.target.parentNode)
    if (document.querySelectorAll('.school-fields').length===1){
        document.querySelectorAll('.school-fields')[0].removeChild(document.querySelector('.remove-school'))
    }
}

addSchoolBtn.addEventListener('click', addSchool)