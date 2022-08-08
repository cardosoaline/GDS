(() => {
    'use strict';

    let btn = document.getElementById('btMenu');
    let menu = document.querySelector('.navbar .menu');

    btn.addEventListener('click', () => {
        if(menu.classList == 'menu active') {
            menu.classList.remove('active');
        } else {
            menu.classList.add('active');
        }
    })
})();