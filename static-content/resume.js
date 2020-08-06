const buildResume = function(){
    // Create resume header with person's name (taken from DOM)
    if (document.querySelector('.person-name').value!==''){
        const header = document.createElement('h1')
        header.className = 'modal-header'
        header.innerText = document.querySelector('.person-name').value
        document.querySelector('.modal_content').appendChild(header)
    }
    // Below the header is the person's contact info (taken from backend)
    person.addContact(document.querySelector('.person-address').value,
    document.querySelector('.person-email').value,
    document.querySelector('.person-number').value)
    if (person.contact!==''){
        const contact = document.createElement('p')
        contact.className = 'modal-contact'
        contact.innerText = person.contact
        document.querySelector('.modal_content').appendChild(contact)
    }
    // Next is the person's job title (taken from DOM)
    if (document.querySelector('.person-title').value!==''){
        const title = document.createElement('p')
        title.className = 'modal-job-title'
        title.innerText = document.querySelector('.person-title').value
        document.querySelector('.modal_content').appendChild(title)
    }
    // Next is the intro paragraph (taken from DOM)
    if (document.querySelector('.person-intro').value!==''){
        const intro = document.createElement('p')
        intro.className = 'modal-intro'
        intro.innerText = document.querySelector('.person-intro').value
        document.querySelector('.modal_content').appendChild(intro)
    }
    // Next is the person's skills (taken from backend)
    person.addSkills(document.querySelectorAll('.person-skills'))
    if (person.skills!==''){
        const coreComp = document.createElement('p')
        coreComp.className = 'modal-sub-heading'
        coreComp.innerText = 'Core Competencies'
        document.querySelector('.modal_content').appendChild(coreComp)
        const skills = document.createElement('p')
        skills.className = 'modal-skills'
        skills.innerText = person.skills
        document.querySelector('.modal_content').appendChild(skills)
    }
    // Next are the person's jobs (taken from backend)
    for (const x of document.querySelectorAll('.company')){
        if (x.value!==''){
            const career = document.createElement('p')
            career.className = 'modal-sub-heading'
            career.innerText = 'Career'
            document.querySelector('.modal_content').appendChild(career)
            break
        }
    }
    for (const x of document.querySelectorAll('.job-fields')){
        if (x.querySelector('.company').value!==''){
            person.addJob(x.querySelector('.company').value,
            x.querySelector('.position').value,
            x.querySelector('.work-start').value,
            x.querySelector('.work-end').value,
            x.querySelector('.work-desc').value)
        }
    }
    for (const x of person.work){
        const jobInfoHeader = document.createElement('div')
        jobInfoHeader.className = 'modal-sub-sub-heading'
        document.querySelector('.modal_content').appendChild(jobInfoHeader)

        const company = document.createElement('p')
        company.className = 'job-heading'
        company.innerText = x.company
        jobInfoHeader.appendChild(company)

        x.getTimeEmployed()
        if (x.position!=='' && x.timeEmployed!==''){
            const positionTime = document.createElement('p')
            positionTime.className = 'position-length'
            const position = document.createElement('span')
            position.className = 'position-heading'
            position.innerText = x.position + ', '
            const employment = document.createElement('span')
            employment.innerText = x.timeEmployed
            jobInfoHeader.appendChild(positionTime)
            positionTime.appendChild(position)
            positionTime.appendChild(employment)
        }
        else if (x.position!=='' || x.timeEmployed!==''){
            const positionTime = document.createElement('p')
            positionTime.className = 'position-length'
            const position = document.createElement('span')
            position.className = 'position-heading-alt'
            position.innerText = x.position
            const employment = document.createElement('span')
            employment.innerText = x.timeEmployed
            jobInfoHeader.appendChild(positionTime)
            positionTime.appendChild(position)
            positionTime.appendChild(employment)
        }

        if (x.duties!==''){
            const dutiesTitle = document.createElement('p')
            dutiesTitle.className = 'duties-title'
            dutiesTitle.innerText = 'Key Assignments & Accomplishments:'
            document.querySelector('.modal_content').appendChild(dutiesTitle)
            const duties = document.createElement('p')
            duties.innerText = x.duties
            document.querySelector('.modal_content').appendChild(duties)
        }
    }
    // Next is the education/certificates section (taken from backend)
    for (const x of document.querySelectorAll('.school')){
        if (x.value!==''){
            const education = document.createElement('p')
            education.className = 'modal-sub-heading'
            education.innerText = 'Education'
            document.querySelector('.modal_content').appendChild(education)
            break
        }
    }
    if (document.querySelectorAll('.modal-sub-heading').length===0 ||
        document.querySelectorAll('.modal-sub-heading')[
        document.querySelectorAll('.modal-sub-heading').length-1].innerText
        !=='Education'){
        for (const x of document.querySelectorAll('.cert-name')){
            if (x.value!==''){
                const education = document.createElement('p')
                education.className = 'modal-sub-heading'
                education.innerText = 'Education'
                document.querySelector('.modal_content').appendChild(education)
                break
            }
        }
    }

    for (const x of document.querySelectorAll('.school-fields')){
        if (x.querySelector('.school').value!==''){
            person.addSchool(x.querySelector('.school').value,
            x.querySelector('.school-end').value,
            x.querySelector('.degree').value)
        }
    }
    if (person.schools.length > 0){
        const schools = document.createElement('p')
        schools.className = 'school-list'
        document.querySelector('.modal_content').appendChild(schools)
        const schoolSect = document.createElement('span')
        schoolSect.className = 'school-info'
        schoolSect.innerText = 'Education'
        document.querySelector('.school-list').appendChild(schoolSect)
        const schoolSectColon = document.createElement('span')
        schoolSectColon.className = 'school-colon'
        schoolSectColon.innerText = ': '
        document.querySelector('.school-list').appendChild(schoolSectColon)
        person.getSchoolInfo()
        const schoolInfo = document.createElement('span')
        schoolInfo.innerText = person.schoolInfo
        document.querySelector('.school-list').appendChild(schoolInfo)
    }

    for (const x of document.querySelectorAll('.cert-fields')){
        if (x.querySelector('.cert-name').value!==''){
            person.addCert(x.querySelector('.cert-name').value,
            x.querySelector('.cert-year').value)
        }
    }
    if (person.certs.length > 0){
        const certs = document.createElement('p')
        certs.className = 'cert-list'
        document.querySelector('.modal_content').appendChild(certs)
        const certSect = document.createElement('span')
        certSect.className = 'cert-info'
        certSect.innerText = 'Certifications'
        document.querySelector('.cert-list').appendChild(certSect)
        const certSectColon = document.createElement('span')
        certSectColon.className = 'cert-colon'
        certSectColon.innerText = ': '
        document.querySelector('.cert-list').appendChild(certSectColon)
        person.getCertInfo()
        const certInfo = document.createElement('span')
        certInfo.innerText = person.certInfo
        document.querySelector('.cert-list').appendChild(certInfo)
    }
}