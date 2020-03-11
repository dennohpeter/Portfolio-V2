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

const controlsbar = () => {
    const header = document.querySelector(".navbar");
    let lastScrollTop = 0;
    let controlsHeight = 0;

    window.addEventListener("scroll", function (event) {
        let fromTop = window.pageYOffset || document.documentElement.scrollTop;
        // downscroll code
        if (fromTop > lastScrollTop) {
            header.classList.add('scroll');
            controlsHeight = header.offsetHeight;


            if (fromTop > controlsHeight) {
                header.classList.add("scrollAnim");
            }

        }
        // upscroll code
        else {
            if (fromTop < controlsHeight) {
                header.classList.remove('scroll');
                header.classList.remove('scrollAnim');
            }
            header.classList.remove('scrollAnim');

        }

        // For Mobile or negative scrolling
        lastScrollTop = fromTop <= 0 ? 0 : fromTop;


    }, false);

}
// const slider = () => tns({
//     container: '.articles_slider',
//     gutter: 10,
//     speed: 800,
//     slideBy: 'page',
//     mouseDrag: true,
//     autoplay: true,
//     autoplayHoverPause: true,
//     controlsPosition: 'bottom',
//     controlsContainer: '.nav-controls',
//     controlsText: ['<', '>'],
//     navPosition: 'bottom',
//     navContainer: '.nav-dots',
//     responsive: {
//         0: {
//             items: 1,
//             controls: false
//         },
//         767: {
//             items: 2,
//             controls: true
//         },
//         992: {
//             items: 3,
//             controls: true
//         },
//         1200: {
//             items: 3,
//             controls: true
//         },
//         1500: {
//             items: 5,
//             controls: true
//         }
//     }
// });

menu();
controlsbar();
// slider()