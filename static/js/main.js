let home = document.getElementById('home')
let projects = document.getElementById('projects')
let contact = document.getElementById('contact')


const showMenu = (toggleId) =>{
  const toggle = document.getElementById(toggleId);
  if(toggle){
    toggle.addEventListener('click', ()=>{
       home.classList.toggle('hidden');
       home.classList.toggle('home_show');
       projects.classList.toggle('hidden');
       projects.classList.toggle('projects_show');
       contact.classList.toggle('hidden');
       contact.classList.toggle('contact_show');
    })
  }
}
showMenu('nav-toggle')

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  home.classList.toggle('hidden');
  categories.classList.toggle('hidden');
  contact.classList.toggle('hidden');
}
navLink.forEach(n => n.addEventListener('click', linkAction));