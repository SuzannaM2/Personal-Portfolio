const today = new Date();
const thisYear = today.getFullYear();
let footer = document.querySelector('#footer');
let copyright = document.createElement("p");
const name = "Suzanna";
copyright.innerHTML = `${name} ${thisYear}`;
footer.appendChild(copyright);

//creating list of skills

let skills = ["hardworking", 'professional', 'punctual'];
let skillsSection = document.getElementById('skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; ++i){
    let skill = document.createElement ('li');
    skill.innerText = skills[i];   
    skillsList.appendChild(skill);
};


let messageForm = document.getElementsByName('leave_message')[0];
const input = messageForm.querySelector('input');
const ul = document.getElementById("messages");

messageForm.addEventListener ('submit', (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;
    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    messageList.appendChild(newMessage);

    const text = input.value;
    newMessage.textContent = text;
    newMessage.innerHTML = `<a href = "#mail"> ${name} </a> wrote : ${message} `;
    e.target.reset()

    let removeButton = document.createElement('button').setAttribute = ("button", "remove");
    removeButton.textContent = "remove"; 
    //removeButton.setAttribute = ("button", "remove");

    ul.addEventListener('click', () => {
        const entry = removeButton.parentNode;
        newMessage.removeChild(entry); 
        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);         
    });
});