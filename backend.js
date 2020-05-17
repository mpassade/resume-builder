const Cert = function(cert,yrCompleted){
    return {
        cert,
        yrCompleted,
        certInfo: '',
        getCertInfo(cert,yrCompleted){
            const arr = []
            arr.push(cert)
            if (yrCompleted!==''){
                arr.push(yrCompleted)
            }
            this.certInfo = arr.join(', ')
        }
    }
}

const School = function(school,gradYr,degree){
    return {
        school,
        gradYr,
        degree,
        schoolInfo: '',
        getSchoolInfo(degree,school,gradYr){
            const arr = []
            if (degree!==''){
                arr.push(degree)
            }
            arr.push(school)
            if (gradYr!==''){
                arr.push(gradYr)
            }
            this.schoolInfo = arr.join(', ')
        }
    }
}
const Work = function(company,position,startDate,endDate,duties){
    return {
        company,
        position,
        startDate,
        endDate,
        timeEmployed: '',
        duties,
        getTimeEmployed(){
            if (this.startDate!=='' && this.endDate!==''){
                this.timeEmployed = this.startDate + ' to ' + this.endDate
            }
        }
    }
}
const Person = function(){
    return {
        contact: '',
        skills: '',
        schoolInfo: '',
        certInfo: '',
        work: [],
        schools: [],
        certs: [],
        addContact(address,email,number){
            const arr = []
            if (address!==''){
                arr.push(address)
            }
            if (email!==''){
                arr.push(email)
            }
            if (number!==''){
                arr.push(number)
            }
            this.contact = arr.join(' | ')
        },
        addSkills(arr){
            const skillsArr = []
            for (const x of arr){
                if (x.value!==''){
                    skillsArr.push(x.value)
                }
            }
            this.skills = skillsArr.join(' | ')
        },
        addJob(company,position,startDate,endDate,duties){
            this.work.push(Work(company,position,startDate,endDate,duties))
        },
        addSchool(school,gradYr,degree){
            this.schools.push(School(school,gradYr,degree))
        },
        getSchoolInfo(){
            const arr = []
            for (const x of person.schools){
                x.getSchoolInfo(x.degree,x.school,x.gradYr)
                arr.push(x.schoolInfo)
            }
            this.schoolInfo = arr.join(' | ')
        },
        addCert(cert,yrCompleted){
            this.certs.push(Cert(cert,yrCompleted))
        },
        getCertInfo(){
            const arr = []
            for (const x of person.certs){
                x.getCertInfo(x.cert,x.yrCompleted)
                arr.push(x.certInfo)
            }
            this.certInfo = arr.join(' | ')
        }
    }
}

const person = Person()