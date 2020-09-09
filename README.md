# Resume Builder

## What is does

This app creates a resume for you based on the information that you pass into it. Information includes your name, contact details, skills, jobs worked, and education.

## How to use it

Fill in the fields:

* Name: Enter your first and last name.
* Address: Enter your address.
* Email: Enter your email.
* Phone Number: Enter your telephone number.
* Job Title: Enter the job title you usually go by.
* Skills: Add your skills in the input fields - one skill per field. When there's only 1 field you can add another by clicking the '+' sign to the right of it. When there are more than 1 field, the buttons to the right of them have '-' signs (to remove the selected skill/field if desired) and a button below 'Skills' called 'Add Skill' is displayed. The new 'Add Skill' button can then be used to add additional skill fields.
* Brief Introduction of Expertise: A paragraph meant to introduce yourself to the reader of the resume. It should explain who you are as a professional and summarize your expertise.
* Work Experience:
  * Company: Enter the name of the company you worked for (note that no information for a job set will be displayed on the resume if the 'Company' field for that set is left blank). 
  * Position: Enter the job title you had while you worked there.
  * Start Date: Enter the date you started working there in any format you'd like.
  * End Date: Enter the date you left the job in any format you'd like. If you still work there, you can just enter 'Current'.
  * Add Job Button: If you wish to have more than 1 job displayed on the resume, you can click the 'Add Job' button to create another set of work experience fields. When there are more than 1 set, each will have a 'Remove Job' button under it that'll delete the set if clicked.

* Education:
  * School: Enter the name of the school that you attended (note that no information for a school set will be displayed on the resume if the 'School' field for that set is left blank).
  * Graduation Year: Enter the year that you graduated or completed the schooling.
  * Degree/Diploma: Enter the name of the degree or diploma that you received.
  * Add School Button: If you wish to have more than 1 school/degree displayed on the resume, you can click the 'Add School' button to create another set of school fields. When there are more than 1 set, each will have a 'Remove School' button under it that'll delete the set if clicked.

* Certifications (note to leave this section blank if you have no certifications that you want displayed on the resume):
  * Name: Enter the name of the certification acquired.
  * Year Achieved: Enter the year that you obtained the certification.
  * Add Certificate Button: If you wish to have more than 1 certificate displayed on the resume, you can click the 'Add Certificate' button to create another set of cert fields. When there are more than 1 set, each will have a 'Remove Certificate' button under it that'll delete the set if clicked.

* Create & View Resume Button: When clicked, the resume will be created and displayed. You can then click any black space around it to exit and return to the previous page. Any edits will immediately take effect once you make them and click the create resume button again.
* Download Resume Button: When the preview of your resume appears (after clicking the create & view button) there will be a download icon at the top right-hand corner of the screen. If you click it, it will download your resume as a .doc document.
* Clear Form Button: When clicked, all of the information entered into the fields on the form will be deleted. The skills section will go back to having 1 field. Likewise, the work, education, and certificate sections will go back to having 1 set of fields each. This button makes everything as it was when you first loaded the webpage. It is meant as a tool to start the process over if so desired, instead of having to go and delete the content within each field on the form.



## Deployment

The Resume Builder website is hosted on Amazon Web Services (AWS) and can be accessed by going to https://build-a-resume.com. The AWS configuration is scripted using Terraform with the state data stored in an S3 bucket.

When users go to build-a-resume.com, Route 53 uses an A or AAAA (for users on IPv6 networks) record to forward the traffic to a Cloudfront Distribution. Cloudfront uses all edge locations to ensure users globally have the best performance when accessing the website.

Cloudfront also uses an SSL certificate created in ACM so that it can use HTTPS to secure communication to build-a-resume.com. The Cloudfront Distribution's origin is the S3 bucket where the Resume Builder website is hosted.

Resume Builder contains no application code and is therefore static and can be hosted via S3 which can serve the HTML, CSS, JavaScript, and image files on its own. The bucket is restricted by an origin access identity, meaning its content can only be accessed through the Cloudfront Distribution that it's associated with.