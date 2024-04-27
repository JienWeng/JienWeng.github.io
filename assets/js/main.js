/* ---Show Menu--- */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* SHOW MENU */
/* ---Validate if constant exists--- */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/* HIDE MENU */
/* ---Validate if constant exists--- */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/* --- Change Background Header --- */
const bgHeader = () =>{
    const header = document.getElementById('header')
    //When scroll is greater than 50 viewport height
    this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
}
window.addEventListener('scroll',bgHeader)

/*--- Services Modal --- */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelectorAll('.services__modal');
    const modalButton = document.querySelectorAll('.services__button');
    const modalClose = document.querySelectorAll('.services__modal-close');

    const activeModal = (modalClick) => {
        modal[modalClick].classList.add('active-modal');
    };

    modalButton.forEach((button, i) => {
        button.addEventListener('click', () => {
            activeModal(i);
        });
    });

    modalClose.forEach((modalClose) => {
        modalClose.addEventListener('click',() => {
            modal.forEach((modalRemove) => {
                modalRemove.classList.remove('active-modal')
            })
        })
    })
});

/* --Swiper Testimonial-- */
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.testimonial__swiper', {
        loop: true,
        spaceBetween: 32,
        grabCursor: true,
        
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            clickable: true,
        },
        
    });
});

/*--- Scroll Up ---*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // When scroll is higher than 350 viewport height
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/* -- Dark Light Theme --*/
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconTheme = 'ri-sun-line';

    // Previously selected topic
    const selectedTheme = localStorage.getItem('selected-theme');
    const selectedIcon = localStorage.getItem('selected-icon');

    // Get the current theme that interface has by validating the dark-theme class
    const getCurrentTheme = () => {
        return document.body.classList.contains(darkTheme) ? "dark" : 'light';
    };

    const getCurrentIcon = () => {
        return themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';
    };

    if (selectedTheme) {
        // If validation is fulfilled, ask what the issue was to know if we activated or deactivated
        document.body.classList[selectedTheme === 'dark' ? 'add' : "remove"](darkTheme);
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
    }

    if (themeButton) {
        themeButton.addEventListener('click', () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);

            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
        });
    }
});

