const resumeBtn = document.querySelector('.create-resume')
const modal = document.querySelector('.modal')

const attachModalListeners= function(modalElm) {
    modalElm.querySelector('.overlay').addEventListener('click', toggleModal)
}

const detachModalListeners = function(modalElm) {
    modalElm.querySelector('.overlay').removeEventListener('click', toggleModal)
}

const toggleModal = function() {
    const currentState = modal.style.display

    if (currentState === 'none') {
    modal.style.display = 'block'
    attachModalListeners(modal)
    buildResume()
    } else {
    modal.style.display = 'none'
    detachModalListeners(modal)
    clearResume()
    }
}

resumeBtn.addEventListener('click', toggleModal)