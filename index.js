// var selection for elemnts

const moon = document.querySelector('#moon');
console.log(moon);

const sun = document.querySelector('#sun');
const logo = document.querySelector('#logo1');

moon.addEventListener('click', () => {
   document.body.classList.toggle('darktheme');

   if (document.body.classList.contains('darktheme')) {
      moon.style.display = 'none';
      sun.style.display = 'inline';
      logo.src = "./images/logo-whte-bacground-removebg-preview.png";

   } else {
      moon.style.display = 'inline';
      sun.style.display = 'none';
      logo.src = "./images/nikeLogo-removebg-preview.png"
   }
});

sun.addEventListener('click', () => {
   document.body.classList.toggle('darktheme');

   if (document.body.classList.contains('darktheme')) {
      sun.style.display = 'inline';
      moon.style.display = 'none';
      logo.src = "./images/logo-whte-bacground-removebg-preview.png";

   } else {
      document.body.classList.remove('darktheme');
      sun.style.display = 'none';
      moon.style.display = 'inline';
      logo.src = "./images/nikeLogo-removebg-preview.png"
   }
});

// 2. NEXT IS THE FUNCTIONALITY OF THE HAM BUTTON


const hamMenu = document.querySelector('#hamMenu');
const navBar = document.querySelector('.navBar');

hamMenu.addEventListener('click', () => {
   navBar.classList.toggle('show');
});

ls
sa




