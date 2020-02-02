const menu = () => {

    const menu = document.querySelector('.menu');
    const body = document.querySelector("body");
    const icon_menu = document.querySelector('.icon-menu');
    const mobile_menu = document.querySelector('.mobile-menu');
    // const 


    menu.addEventListener('click', () => {
        body.classList.toggle('blur');
        mobile_menu.classList.toggle('active');
        icon_menu.classList.toggle('active');
    })

    // close menu when user clicks outside the sidebar
    window.onclick = function (event) {
        if (event.target == mobile_menu) {
            body.classList.toggle('blur');
            mobile_menu.classList.toggle('active');
            icon_menu.classList.toggle('active');

        }
    }

}
menu();