const menuMobile = () => {
    const btnMenu = document.querySelector('.menu-mobile');
    

    const openMenu = () => {
        const menuList = document.querySelector('.mobile-menu');
        menuList.classList.toggle('open')
    }


    btnMenu.addEventListener('click', openMenu)
}
menuMobile();


    

   

