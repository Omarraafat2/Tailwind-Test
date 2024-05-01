const mobileBtn = document.querySelector("#mobile-btn");
const mobileMenu = document.querySelector("#mobile-menu")



mobileBtn.addEventListener('click', () => {
    

    // console.log('hello');
    mobileMenu.classList.toggle('hidden');
})