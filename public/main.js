const menuIcon = document.querySelector('#menuIcon');
const menuList = document.querySelector('#menuList');

menuIcon.addEventListener('click', ()=> {
    if(menuList.classList.contains('hidden')) {
        menuList.classList.remove('hidden');
    } else {
        menuList.classList.add('hidden');
    }
})