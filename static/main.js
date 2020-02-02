const menu = () => {
    const menu = document.querySelector('.menu');
    const body = document.querySelector("body");
    const icon_menu = document.querySelector('.icon-menu');
    const mobile_menu = document.querySelector('.mobile-menu');

    menu.addEventListener('click', () => {
        toggleMenu()
    })

    // close menu when user clicks outside the sidebar
    window.onclick = function (event) {
        if (event.target == mobile_menu) {
            toggleMenu();

        }
    }
    // close menu user selects a link option
    mobile_menu.addEventListener("click", function (event) {
        if (event.target && event.target.matches("a")) {
            toggleMenu();

        }
    })
    // TODO handleKeyEvent

    function toggleMenu() {
        body.classList.toggle('blur');
        mobile_menu.classList.toggle('active');
        icon_menu.classList.toggle('active');
    }

}

const navbar = () => {
    const header = document.querySelector(".container>header");
    let lastScrollTop = 0;
    let navHeight = 0;

    window.addEventListener("scroll", function (event) {
        let fromTop = window.pageYOffset || document.documentElement.scrollTop;
        // downscroll code
        if (fromTop > lastScrollTop) {
            header.classList.add('scroll');
            navHeight = header.offsetHeight;


            if (fromTop > navHeight) {
                header.classList.add("scrollAnim");
            }

        }
        // upscroll code
        else {
            if (fromTop < navHeight) {
                header.classList.remove('scroll');
                header.classList.remove('scrollAnim');
            }
            header.classList.remove('scrollAnim');

        }

        // For Mobile or negative scrolling
        lastScrollTop = fromTop <= 0 ? 0 : fromTop;


    }, false);

}
navbar();
menu();