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


const BUTTON = {
    remove: 'remove',
  }
let messageForm = document.getElementsByName('leave_message')[0];
messageForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);
    const now = new Date()
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');

      // if hidden, show the "messages" section
    if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
      } 
    
    newMessage.innerHTML = 
        `<div>
        <a class="link" href="mailto: ${email}"> ${name} </a> asking: 
        <span class="strong"> ${message} </span> <p>${now}</p>
        </div>`

    messageList.appendChild(newMessage);

    //remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = BUTTON.remove; 
    removeButton.type = "button";
    
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        const entryList = entry.parentNode

        if (entryList.children.length <= 1) {
        messageSection.style.display = 'none'
          }
        entry.remove()
    });
newMessage.appendChild(removeButton)
messageList.prepend(newMessage)     
e.target.reset()   

});