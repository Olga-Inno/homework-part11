'use strict';
const menuWrapper = document.querySelector('.popup-menu');
const menuButton = document.querySelector('.popup-menu__button');
const menulist = document.querySelector('.popup-menu__list');

function showMenu() {
    menulist.classList.toggle('hide');
}

menuButton.addEventListener('click',showMenu);

