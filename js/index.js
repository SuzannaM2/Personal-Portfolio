const today = new Date();
const thisYear = today.getFullYear();
console.log('thisYear');
let footer = document.querySelector('#footer');
let copyright = document.createElement("p");
const name = "Suzanna";
copyright.innerHTML = `${name} ${thisYear}`;
footer.appendChild(copyright);

//creating list of skills

var skills = ["hardworking", 'professional', 'punctual'];
let skillsSection = document.getElementById('skills');
let skillsList = document.getElementById('skills');
for (let i=0; i< skills.length; ++i){
    var skill = document.createElement ('li');
    skill.innerText = skills[i];   
    skillsList.appendChild(skill);
};

