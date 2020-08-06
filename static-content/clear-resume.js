const clearResume = function(){
    let child = document.querySelector('.modal_content').lastElementChild
    while (child){
        document.querySelector('.modal_content').removeChild(child)
        child = document.querySelector('.modal_content').lastElementChild
    }
    person.work.length = 0
    person.schools.length = 0
    person.certs.length = 0
    person.contact = ''
    person.skills = ''
    person.schoolInfo = ''
    person.certInfo = ''
}