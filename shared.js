const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav__items');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();