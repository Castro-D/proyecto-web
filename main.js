const menu = document.querySelector(".hamburger-menu");
const ham = document.querySelector(".hamburger");
const menuIcon = document.querySelector(".menuIcon");
const menuLinks = document.querySelectorAll('.menuLink')
const ham2 = document.querySelector('#ham');

function toggleMenu() {
  if(menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    document.body.style['overflow-y'] = 'auto';
  }
  else {
    menu.classList.add('show-menu')
    document.body.style['overflow-y'] = 'hidden';
  }
}

menuLinks.forEach(function(menuLink) {menuLink.addEventListener("click", toggleMenu)})

ham.addEventListener('click', toggleMenu);
ham2.addEventListener('click', toggleMenu);