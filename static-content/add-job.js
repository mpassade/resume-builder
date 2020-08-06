const addJobBtn = document.querySelector('.add-work')

const addJob = function(){
    const jobContainer = document.createElement('div')
    jobContainer.className = 'job-fields'

    const companyContainer = document.createElement('div')
    companyContainer.classList.add('resume-builder-input-child', 'one-input')
    const companyLabel = document.createElement('label')
    companyLabel.htmlFor = 'company'
    companyLabel.innerText = 'Company'
    const companyInput = document.createElement('input')
    companyInput.type = 'text'
    companyInput.className = 'company'
    companyInput.name = 'company'

    const positionContainer = document.createElement('div')
    positionContainer.classList.add('resume-builder-input-child', 'one-input')
    const positionLabel = document.createElement('label')
    positionLabel.htmlFor = 'position'
    positionLabel.innerText = 'Position'
    const positionInput = document.createElement('input')
    positionInput.type = 'text'
    positionInput.className = 'position'
    positionInput.name = 'position'

    const wrkStartContainer = document.createElement('div')
    wrkStartContainer.classList.add('resume-builder-input-child', 'one-input')
    const wrkStartLabel = document.createElement('label')
    wrkStartLabel.htmlFor = 'work-start'
    wrkStartLabel.innerText = 'Start Date'
    const wrkStartInput = document.createElement('input')
    wrkStartInput.type = 'text'
    wrkStartInput.className = 'work-start'
    wrkStartInput.name = 'work-start'

    const wrkEndContainer = document.createElement('div')
    wrkEndContainer.classList.add('resume-builder-input-child', 'one-input')
    const wrkEndLabel = document.createElement('label')
    wrkEndLabel.htmlFor = 'work-end'
    wrkEndLabel.innerText = 'End Date'
    const wrkEndInput = document.createElement('input')
    wrkEndInput.type = 'text'
    wrkEndInput.className = 'work-end'
    wrkEndInput.name = 'work-end'

    const wrkDescContainer = document.createElement('div')
    wrkDescContainer.classList.add('resume-builder-input-child', 'work-textarea')
    const wrkDescLabel = document.createElement('label')
    wrkDescLabel.htmlFor = 'work-desc'
    wrkDescLabel.className = 'work-label'
    wrkDescLabel.innerText = 'Duties & Accomplishments'
    const wrkDescTextarea = document.createElement('textarea')
    wrkDescTextarea.className = 'work-desc'
    wrkDescTextarea.name = 'work-desc'

    const rmvWrkBtn = document.createElement('button')
    rmvWrkBtn.className = 'remove-work'
    rmvWrkBtn.innerText = 'Remove Job'
    const rmvWrkBtn2 = document.createElement('button')
    rmvWrkBtn2.className = 'remove-work'
    rmvWrkBtn2.innerText = 'Remove Job'

    if (document.querySelectorAll('.job-fields').length===1){
        document.querySelectorAll('.job-fields')[0].appendChild(rmvWrkBtn2)
    }
    inputParentCont.insertBefore(jobContainer, addJobBtn)
    jobContainer.appendChild(companyContainer)
    companyContainer.appendChild(companyLabel)
    companyContainer.appendChild(companyInput)
    jobContainer.appendChild(positionContainer)
    positionContainer.appendChild(positionLabel)
    positionContainer.appendChild(positionInput)
    jobContainer.appendChild(wrkStartContainer)
    wrkStartContainer.appendChild(wrkStartLabel)
    wrkStartContainer.appendChild(wrkStartInput)
    jobContainer.appendChild(wrkEndContainer)
    wrkEndContainer.appendChild(wrkEndLabel)
    wrkEndContainer.appendChild(wrkEndInput)
    jobContainer.appendChild(wrkDescContainer)
    wrkDescContainer.appendChild(wrkDescLabel)
    wrkDescContainer.appendChild(wrkDescTextarea)
    jobContainer.appendChild(rmvWrkBtn)

    for (const x of document.querySelectorAll('.remove-work')){
        x.addEventListener('click', rmvJob)
    }
}

const rmvJob = function(e){
    inputParentCont.removeChild(e.target.parentNode)
    if (document.querySelectorAll('.job-fields').length===1){
        document.querySelectorAll('.job-fields')[0].removeChild(document.querySelector('.remove-work'))
    }
}

addJobBtn.addEventListener('click', addJob)