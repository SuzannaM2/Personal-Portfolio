const today = new Date();
const thisYear = today.getFullYear();
let footer = document.querySelector('#footer');
let copyright = document.createElement("p");
const name = "Suzanna Mamatkulava";
copyright.innerHTML = `&copy; ${name} ${thisYear}`;
footer.appendChild(copyright);

//list of skills
let skills = ['JavaScript', 'HTML', 'CSS'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; ++i){
    let skill = document.createElement ('li');
    skill.innerText = skills[i];   
    skillsList.appendChild(skill);
};
//list of education 
let education = ['Belarusian State Economic University', 
                'CodeTheDream School: JS for beginers'];
let educationSection = document.getElementById('education');
let educationList = educationSection.querySelector('ul');
for (let i = 0; i < education.length; ++i){
    let study = document.createElement ('li');
    study.innerText = education[i];   
    educationList.appendChild(study);
};

function hide () {
    if (messageList.childElementCount == 0) {
        messageSection.style.display= "none";
    } else {
        messageSection.style.display= "block";
    }
}

let messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log(name, email, message);
    const now = new Date()
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

    newMessage.innerHTML = 
        `<div>
        <a class="link" href="mailto:${email}"> ${name} </a> asking: 
        <span class="strong"> ${message} </span> <p>${now}</p>
        </div>`

    messageList.appendChild(newMessage);

    //remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove'; 
    removeButton.setAttribute('type', 'button');
    removeButton.type = "button";
    
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        const entryList = entry.parentNode

        if (entryList.children.length <= 0) {
        messageSection.style.display = 'none'
          }
        entry.remove()
    });

newMessage.appendChild(removeButton);
messageList.prepend(newMessage);  
e.target.reset();
});

const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/SuzannaM2/repos');
githubRequest.send();
// Fetch API 
fetch ('https://api.github.com/users/SuzannaM2/repos')
    .then (response => response.json() )
    .then (githubRequest.addEventListener('load', function() {
        const repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories);
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector ("ul");

        for (let i=0; i<repositories.length; i++) {
            const project= document.createElement ('li');
            const repLink=document.createElement('a');
            repLink.href=repositories[i].html_url;
            repLink.innerHTML = repositories[i].name;
            project.appendChild(repLink);
            projectList.appendChild(project);
        } }));


/*    
creating XMLHttpRequest 

const githubRequest = new XMLHttpRequest();
githubRequest.open('GET', 'https://api.github.com/users/SuzannaM2/repos');
githubRequest.send();
githubRequest.onreadystatechange = function() {
    if (githubRequest.readyState === 4 ) {
        const repositories = JSON.parse(githubRequest.responseText);
        console.log(repositories);
        const projectSection = document.getElementById("projects");
        const projectList = projectSection.querySelector ("ul");
        for (let i=0; i<repositories.length; i++) {
            const project= document.createElement ('li');
            const repLink=document.createElement('a');
            repLink.href=repositories[i].html_url;
            repLink.innerHTML = repositories[i].name;
            project.appendChild(repLink);
            projectList.appendChild(project);
        }
    }
}
*/
