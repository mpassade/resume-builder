const inputParentCont = document.querySelector('.resume-builder-input-parent')
const introTextarea = document.querySelector('.intro-textarea')

const addSkill = function(){
    const firstAddSkillBtn = document.querySelector('.initial-add-skill')
    const skillContainer = document.createElement('div')
    skillContainer.classList.add('resume-builder-input-child', 'one-or-more-input')
    const skillLabel = document.createElement('label')
    skillLabel.className = 'invisible'
    skillLabel.htmlFor = 'person-skills'
    skillLabel.innerText = 'Skills'
    const skillInput = document.createElement('input')
    skillInput.type = 'text'
    skillInput.className = 'person-skills'
    skillInput.name = 'person-skills'
    const skillRemove = document.createElement('button')
    skillRemove.className = 'remove-skill'
    const newAddSkillBtn = document.createElement('button')
    newAddSkillBtn.className = 'add-skill'
    newAddSkillBtn.innerText = 'Add Skill'
    inputParentCont.insertBefore(skillContainer, introTextarea)
    skillContainer.appendChild(skillLabel)
    skillContainer.appendChild(skillInput)
    skillContainer.appendChild(skillRemove)
    firstAddSkillBtn.className = 'remove-skill'
    const removeSkillBtn = document.querySelectorAll('.remove-skill')
    for (const x of removeSkillBtn){
        x.innerText = '-'
        x.addEventListener('click', removeSkill)
    }
    inputParentCont.insertBefore(newAddSkillBtn, introTextarea)
    firstAddSkillBtn.removeEventListener('click', addSkill)
    newAddSkillBtn.addEventListener('click', newAddSkill)
}
const newAddSkill = function(){
    const newAddSkillBtn = document.querySelector('.add-skill')
    const skillContainer = document.createElement('div')
    skillContainer.classList.add('resume-builder-input-child', 'one-or-more-input')
    const skillLabel = document.createElement('label')
    skillLabel.className = 'invisible'
    skillLabel.htmlFor = 'person-skills'
    skillLabel.innerText = 'Skills'
    const skillInput = document.createElement('input')
    skillInput.type = 'text'
    skillInput.className = 'person-skills'
    skillInput.name = 'person-skills'
    const skillRemove = document.createElement('button')
    skillRemove.className = 'remove-skill'
    inputParentCont.insertBefore(skillContainer, newAddSkillBtn)
    skillContainer.appendChild(skillLabel)
    skillContainer.appendChild(skillInput)
    skillContainer.appendChild(skillRemove)
    const removeSkillBtn = document.querySelectorAll('.remove-skill')
    for (const x of removeSkillBtn){
        x.innerText = '-'
        x.addEventListener('click', removeSkill)
    }
}
const removeSkill = function(e){
    const removeSkillBtn = document.querySelectorAll('.remove-skill')
    const invisibleLabels = document.querySelectorAll('.invisible')
    if (e.target===removeSkillBtn[0]){
        invisibleLabels[0].classList.remove('invisible')
    }
    inputParentCont.removeChild(e.target.parentNode)
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
}
document.querySelector('.initial-add-skill').addEventListener('click', addSkill)