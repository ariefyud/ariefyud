let home = document.querySelector('.nav-home');
let about = document.querySelector('.nav-about');
let skills = document.querySelector('.nav-skills');
let projects = document.querySelector('.nav-projects');
let contact = document.querySelector('.nav-contact');

let background = document.querySelector('.nav-mini__background');
let navList = document.querySelector('.nav-mini__list');

home.addEventListener('click', () => {
  navList.style.opacity = '0';
  background.style.transform = 'scale(1)';
  window.location.reload();
});

about.addEventListener('click', () => {
  navList.style.opacity = '0';
  background.style.transform = 'scale(1)';
  window.location.reload();
});

skills.addEventListener('click', () => {
  navList.style.opacity = '0';
  background.style.transform = 'scale(1)';
  window.location.reload();
});

projects.addEventListener('click', () => {
  navList.style.opacity = '0';
  background.style.transform = 'scale(1)';
  window.location.reload();
});

contact.addEventListener('click', () => {
  navList.style.opacity = '0';
  background.style.transform = 'scale(1)';
  window.location.reload();
});