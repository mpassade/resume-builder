const addCertBtn = document.querySelector('.add-cert')

const addCert = function(){
    const certInfoContainer = document.createElement('div')
    certInfoContainer.className = 'cert-fields'

    const certContainer = document.createElement('div')
    certContainer.classList.add('resume-builder-input-child', 'one-input')
    const certLabel = document.createElement('label')
    certLabel.htmlFor = 'cert-name'
    certLabel.innerText = 'Name'
    const certInput = document.createElement('input')
    certInput.type = 'text'
    certInput.className = 'cert-name'
    certInput.name = 'cert-name'

    const gradContainer = document.createElement('div')
    gradContainer.classList.add('resume-builder-input-child', 'one-input')
    const gradLabel = document.createElement('label')
    gradLabel.htmlFor = 'cert-year'
    gradLabel.innerText = 'Year Achieved'
    const gradInput = document.createElement('input')
    gradInput.type = 'text'
    gradInput.className = 'cert-year'
    gradInput.name = 'cert-year'

    const rmvCertBtn = document.createElement('button')
    rmvCertBtn.className = 'remove-cert'
    rmvCertBtn.innerText = 'Remove Certificate'
    const rmvCertBtn2 = document.createElement('button')
    rmvCertBtn2.className = 'remove-cert'
    rmvCertBtn2.innerText = 'Remove Certificate'

    if (document.querySelectorAll('.cert-fields').length===1){
        document.querySelectorAll('.cert-fields')[0].appendChild(rmvCertBtn2)
    }
    inputParentCont.insertBefore(certInfoContainer, addCertBtn)
    certInfoContainer.appendChild(certContainer)
    certContainer.appendChild(certLabel)
    certContainer.appendChild(certInput)
    certInfoContainer.appendChild(gradContainer)
    gradContainer.appendChild(gradLabel)
    gradContainer.appendChild(gradInput)
    certInfoContainer.appendChild(rmvCertBtn)

    for (const x of document.querySelectorAll('.remove-cert')){
        x.addEventListener('click', rmvCert)
    }
}

const rmvCert = function(e){
    inputParentCont.removeChild(e.target.parentNode)
    if (document.querySelectorAll('.cert-fields').length===1){
        document.querySelectorAll('.cert-fields')[0].removeChild(document.querySelector('.remove-cert'))
    }
}

addCertBtn.addEventListener('click', addCert)