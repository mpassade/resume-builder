const css = ".modal-header {\
    text-align: center;\
    background-color: #D9D9D9;\
    mso-border-top-alt:solid windowtext 1.0pt;\
    mso-border-bottom-alt:solid windowtext 1.0pt;\
    margin-bottom: 0;\
}\
.modal-contact {\
    text-align: center;\
    font-size: 10.0pt;\
    margin-top: 0;\
}\
.modal-job-title {\
    text-align: center;\
    font-size: 20.0pt;\
    color: #366091;\
    margin-bottom: 0;\
    margin-top: 0;\
}\
.modal-sub-heading {\
    text-align: center;\
    color: #708DAF;\
    background-color: #F2F2F2;\
    font-size: 14.0pt;\
    mso-border-bottom-alt:solid windowtext 1.0pt;\
    margin-bottom: 0;\
}\
.modal-skills, .school-list, .cert-list {\
    text-align: center;\
}\
.modal-sub-sub-heading {\
    background-color: #F2F2F2;\
    text-align: center;\
    margin-top: 0;\
}\
.job-heading {\
    font-weight: bold;\
    margin-bottom: 0;\
}\
.position-heading, .position-heading-alt {\
    font-style: italic;\
}\
.position-length {\
    margin-top: 0;\
}\
.duties-title, .school-info, .cert-info {\
    font-weight: bold;\
    font-style: italic;\
    text-decoration: underline;\
}\
.school-colon, .cert-colon {\
    font-weight: bold;\
}"

const export2Doc = function(element){
    const preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' \
    xmlns:w='urn:schemas-microsoft-com:office:word' \
    xmlns='http://www.w3.org/TR/REC-html40'>\
    <head><style>"+css+"</style><meta charset='utf-8'>\
    <title>Export HTML To Doc</title></head><body>"
    const postHtml = "</body></html>"
    const html = preHtml+document.querySelector(element).innerHTML+postHtml
    
    // Specify link url
    const url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)
    
    // Create download link element
    const downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);
    
    // Create a link to the file
    downloadLink.href = url
        
    // Setting the file name
    downloadLink.download = 'resume.doc';
        
    //triggering the function 
    downloadLink.click()
    
    document.body.removeChild(downloadLink)
}
