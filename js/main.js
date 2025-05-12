

$(function () {

    "use strict";

    /***************************

    swup

    ***************************/
    const options = {
        containers: ['#swupMain', '#swupMenu'],
        animateHistoryBrowsing: true,
        linkSelector: 'a:not([data-no-swup])',
        animationSelector: '[class="mil-main-transition"]'
    };
    const swup = new Swup(options);

    /***************************

    register gsap plugins

    ***************************/
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    /***************************

    color variables

    ***************************/

    var accent = '#074073';
    var dark = '#000';
    var light = '#fff';

   
    /***************************

    anchor scroll

    ***************************/
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        var target = $($.attr(this, 'href'));
        var offset = 0;

        if ($(window).width() < 1200) {
            offset = 90;
        }

        $('html, body').animate({
            scrollTop: target.offset().top - offset
        }, 400);
    });
    /***************************

    append

    ***************************/
    $(document).ready(function () {
        $(".mil-arrow").clone().appendTo(".mil-arrow-place");
        $(".mil-dodecahedron").clone().appendTo(".mil-animation");
        $(".mil-lines").clone().appendTo(".mil-lines-place");
        $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
    });
    /***************************

    accordion

    ***************************/

    let groups = gsap.utils.toArray(".mil-accordion-group");
    let menus = gsap.utils.toArray(".mil-accordion-menu");
    let menuToggles = groups.map(createAnimation);

    menus.forEach((menu) => {
        menu.addEventListener("click", () => toggleMenu(menu));
    });

    function toggleMenu(clickedMenu) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
    }

    function createAnimation(element) {
        let menu = element.querySelector(".mil-accordion-menu");
        let box = element.querySelector(".mil-accordion-content");
        let symbol = element.querySelector(".mil-symbol");
        let minusElement = element.querySelector(".mil-minus");
        let plusElement = element.querySelector(".mil-plus");

        gsap.set(box, {
            height: "auto",
        });

        let animation = gsap
            .timeline()
            .from(box, {
                height: 0,
                duration: 0.4,
                ease: "sine"
            })
            .from(minusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(plusElement, {
                duration: 0.4,
                autoAlpha: 0,
                ease: "none",
            }, 0)
            .to(symbol, {
                background: accent,
                ease: "none",
            }, 0)
            .reverse();

        return function (clickedMenu) {
            if (clickedMenu === menu) {
                animation.reversed(!animation.reversed());
            } else {
                animation.reverse();
            }
        };
    }
    /***************************

    back to top

    ***************************/
    const btt = document.querySelector(".mil-back-to-top .mil-link");

    gsap.set(btt, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none"
        }
    });
    
    /***************************

     menu

    ***************************/
    $('.mil-menu-btn').on("click", function () {
        $('.mil-menu-btn').toggleClass('mil-active');
        $('.mil-menu').toggleClass('mil-active');
        $('.mil-menu-frame').toggleClass('mil-active');
    });
    /***************************

    main menu

    ***************************/
    $('.mil-has-children a').on('click', function () {
        $('.mil-has-children ul').removeClass('mil-active');
        $('.mil-has-children a').removeClass('mil-active');
        $(this).toggleClass('mil-active');
        $(this).next().toggleClass('mil-active');
    });
    /***************************

    progressbar

    ***************************/
    gsap.to('.mil-progress', {
        height: '100%',
        ease: 'sine',
        scrollTrigger: {
            scrub: 0.3
        }
    });
    /***************************

    scroll animations

    ***************************/

    const appearance = document.querySelectorAll(".mil-up");

    appearance.forEach((section) => {
        gsap.fromTo(section, {
            opacity: 0,
            y: 40,
            scale: .98,
            ease: 'sine',

        }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: .4,
            scrollTrigger: {
                trigger: section,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const scaleImage = document.querySelectorAll(".mil-scale");

    scaleImage.forEach((section) => {
        var value1 = $(section).data("value-1");
        var value2 = $(section).data("value-2");
        gsap.fromTo(section, {
            ease: 'sine',
            scale: value1,

        }, {
            scale: value2,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });

    const parallaxImage = document.querySelectorAll(".mil-parallax");


    if ($(window).width() > 960) {
        parallaxImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                y: value1,

            }, {
                y: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
    }

    const rotate = document.querySelectorAll(".mil-rotate");

    rotate.forEach((section) => {
        var value = $(section).data("value");
        gsap.fromTo(section, {
            ease: 'sine',
            rotate: 0,

        }, {
            rotate: value,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                toggleActions: 'play none none reverse',
            }
        });
    });
    /***************************

    fancybox

    ***************************/
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
        loop: false,
        protect: true
    });
    $.fancybox.defaults.hash = false;
    /***************************

    reviews slider

    ***************************/

    var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
    var mySwiper = new Swiper('.mil-reviews-slider', {
        // If we need pagination
        pagination: {
            el: '.mil-revi-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        speed: 800,
        effect: 'fade',
        parallax: true,
        navigation: {
            nextEl: '.mil-revi-next',
            prevEl: '.mil-revi-prev',
        },
    })

    /***************************

    infinite slider

    ***************************/
    var swiper = new Swiper('.mil-infinite-show', {
        slidesPerView: 2,
        spaceBetween: 30,
        speed: 5000,
        autoplay: true,
        autoplay: {
            delay: 0,
        },
        loop: true,
        freeMode: true,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
        },
    });

  
      
    /***************************

    portfolio slider

    ***************************/
    var swiper = new Swiper('.mil-portfolio-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        parallax: true,
        mousewheel: {
            enable: true
        },
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    1 item slider

    ***************************/
    var swiper = new Swiper('.mil-1-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
    });
    /***************************

    2 item slider

    ***************************/
    var swiper = new Swiper('.mil-2-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 800,
        parallax: true,
        navigation: {
            nextEl: '.mil-portfolio-next',
            prevEl: '.mil-portfolio-prev',
        },
        pagination: {
            el: '.swiper-portfolio-pagination',
            type: 'fraction',
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
        },
    });

    /*----------------------------------------------------------
    ------------------------------------------------------------

    REINIT

    ------------------------------------------------------------
    ----------------------------------------------------------*/
    document.addEventListener("swup:contentReplaced", function () {

        $('html, body').animate({
            scrollTop: 0,
        }, 0);

        gsap.to('.mil-progress', {
            height: 0,
            ease: 'sine',
            onComplete: () => {
                ScrollTrigger.refresh()
            },
        });
        /***************************

         menu

        ***************************/
        $('.mil-menu-btn').removeClass('mil-active');
        $('.mil-menu').removeClass('mil-active');
        $('.mil-menu-frame').removeClass('mil-active');
        /***************************

        append

        ***************************/
        $(document).ready(function () {
            $(".mil-arrow-place .mil-arrow, .mil-animation .mil-dodecahedron, .mil-current-page a").remove();
            $(".mil-arrow").clone().appendTo(".mil-arrow-place");
            $(".mil-dodecahedron").clone().appendTo(".mil-animation");
            $(".mil-lines").clone().appendTo(".mil-lines-place");
            $(".mil-main-menu ul li.mil-active > a").clone().appendTo(".mil-current-page");
        });
        /***************************

        accordion

        ***************************/

        let groups = gsap.utils.toArray(".mil-accordion-group");
        let menus = gsap.utils.toArray(".mil-accordion-menu");
        let menuToggles = groups.map(createAnimation);

        menus.forEach((menu) => {
            menu.addEventListener("click", () => toggleMenu(menu));
        });

        function toggleMenu(clickedMenu) {
            menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        }

        function createAnimation(element) {
            let menu = element.querySelector(".mil-accordion-menu");
            let box = element.querySelector(".mil-accordion-content");
            let symbol = element.querySelector(".mil-symbol");
            let minusElement = element.querySelector(".mil-minus");
            let plusElement = element.querySelector(".mil-plus");

            gsap.set(box, {
                height: "auto",
            });

            let animation = gsap
                .timeline()
                .from(box, {
                    height: 0,
                    duration: 0.4,
                    ease: "sine"
                })
                .from(minusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(plusElement, {
                    duration: 0.4,
                    autoAlpha: 0,
                    ease: "none",
                }, 0)
                .to(symbol, {
                    background: accent,
                    ease: "none",
                }, 0)
                .reverse();

            return function (clickedMenu) {
                if (clickedMenu === menu) {
                    animation.reversed(!animation.reversed());
                } else {
                    animation.reverse();
                }
            };
        }

        
        /***************************

        main menu

        ***************************/
        $('.mil-has-children a').on('click', function () {
            $('.mil-has-children ul').removeClass('mil-active');
            $('.mil-has-children a').removeClass('mil-active');
            $(this).toggleClass('mil-active');
            $(this).next().toggleClass('mil-active');
        });
        /***************************

        scroll animations

        ***************************/

        const appearance = document.querySelectorAll(".mil-up");

        appearance.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 40,
                scale: .98,
                ease: 'sine',

            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: .4,
                scrollTrigger: {
                    trigger: section,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const scaleImage = document.querySelectorAll(".mil-scale");

        scaleImage.forEach((section) => {
            var value1 = $(section).data("value-1");
            var value2 = $(section).data("value-2");
            gsap.fromTo(section, {
                ease: 'sine',
                scale: value1,

            }, {
                scale: value2,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });

        const parallaxImage = document.querySelectorAll(".mil-parallax");


        if ($(window).width() > 960) {
            parallaxImage.forEach((section) => {
                var value1 = $(section).data("value-1");
                var value2 = $(section).data("value-2");
                gsap.fromTo(section, {
                    ease: 'sine',
                    y: value1,

                }, {
                    y: value2,
                    scrollTrigger: {
                        trigger: section,
                        scrub: true,
                        toggleActions: 'play none none reverse',
                    }
                });
            });
        }

        const rotate = document.querySelectorAll(".mil-rotate");

        rotate.forEach((section) => {
            var value = $(section).data("value");
            gsap.fromTo(section, {
                ease: 'sine',
                rotate: 0,

            }, {
                rotate: value,
                scrollTrigger: {
                    trigger: section,
                    scrub: true,
                    toggleActions: 'play none none reverse',
                }
            });
        });
        /***************************

        fancybox

        ***************************/
        $('[data-fancybox="gallery"]').fancybox({
            buttons: [
            "slideShow",
            "zoom",
            "fullScreen",
            "close"
          ],
            loop: false,
            protect: true
        });
        $.fancybox.defaults.hash = false;
        /***************************

        reviews slider

        ***************************/

        var menu = ['<div class="mil-custom-dot mil-slide-1"></div>', '<div class="mil-custom-dot mil-slide-2"></div>', '<div class="mil-custom-dot mil-slide-3"></div>', '<div class="mil-custom-dot mil-slide-4"></div>', '<div class="mil-custom-dot mil-slide-5"></div>', '<div class="mil-custom-dot mil-slide-6"></div>', '<div class="mil-custom-dot mil-slide-7"></div>']
        var mySwiper = new Swiper('.mil-reviews-slider', {
            // If we need pagination
            pagination: {
                el: '.mil-revi-pagination',
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (menu[index]) + '</span>';
                },
            },
            speed: 800,
            effect: 'fade',
            parallax: true,
            navigation: {
                nextEl: '.mil-revi-next',
                prevEl: '.mil-revi-prev',
            },
        })

        /***************************

        infinite slider

        ***************************/
        var swiper = new Swiper('.mil-infinite-show', {
            slidesPerView: 2,
            spaceBetween: 30,
            speed: 5000,
            autoplay: true,
            autoplay: {
                delay: 0,
            },
            loop: true,
            freeMode: true,
            breakpoints: {
                992: {
                    slidesPerView: 4,
                },
            },
        });

        /***************************

        portfolio slider

        ***************************/
        var swiper = new Swiper('.mil-portfolio-slider', {
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            parallax: true,
            mousewheel: {
                enable: true
            },
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        1 item slider

        ***************************/
        var swiper = new Swiper('.mil-1-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
        });
        /***************************

        2 item slider

        ***************************/
        var swiper = new Swiper('.mil-2-slider', {
            slidesPerView: 1,
            spaceBetween: 30,
            speed: 800,
            parallax: true,
            navigation: {
                nextEl: '.mil-portfolio-next',
                prevEl: '.mil-portfolio-prev',
            },
            pagination: {
                el: '.swiper-portfolio-pagination',
                type: 'fraction',
            },
            breakpoints: {
                992: {
                    slidesPerView: 2,
                },
            },
        });

    });
     

});
 /***************************
    
    Main Animation 

    ***************************/
    let swiperInstance;

    // Función para inicializar Swiper
    function initializeSwiper() {
        console.log("🌀 Intentando inicializar Swiper...");
        let slidesCount = document.querySelectorAll('.swiper-slide').length;
    
        // Verificar si ya está inicializado
        if (swiperInstance instanceof Swiper) {
            console.log("✅ Swiper ya está inicializado, evitando duplicación.");
            return;
        }
    
        // Crear nueva instancia
        swiperInstance = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: slidesCount > 2, // Solo activar loop si hay más de 2 slides
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            grabCursor: true,
            keyboard: { enabled: true },
            breakpoints: {
                768: { slidesPerView: 1 },
                1024: { slidesPerView: slidesCount > 2 ? 2 : 1 },
            },
        });
    
        console.log("✅ Swiper inicializado con éxito.");
    }
    
    // Manejo del contenido reemplazado por Swup
    document.addEventListener("swup:contentReplaced", function () {
        console.log("🔄 Contenido reemplazado por Swup");
    
        // Destruir instancia previa de Swiper de manera segura
        if (swiperInstance instanceof Swiper) {
            try {
                console.log("🛑 Destruyendo instancia previa de Swiper...");
                swiperInstance.destroy(true, true);
                swiperInstance = null;
                console.log("✅ Swiper destruido correctamente.");
            } catch (error) {
                console.error("❌ Error al destruir Swiper:", error);
            }
        } else {
            console.log("⚠️ No hay una instancia previa válida de Swiper.");
        }
    
        // Volver a inicializar Swiper
        initializeSwiper();
    
        // Recargar el CSS sin duplicaciones
        let existingLink = document.querySelector("link[href*='produccionCientífica.css']");
        if (existingLink) {
            console.log("♻️ Eliminando y recargando CSS...");
            existingLink.parentNode.removeChild(existingLink);
        }
    
        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "../css/produccionCientífica.css";
        document.head.appendChild(link);
        console.log("✅ Estilos de 'produccionCientífica.css' recargados.");
    
        // Reiniciar animaciones
        reiniciarAnimaciones();
    
        // Actualizar ScrollTrigger
        ScrollTrigger.refresh();
    
        // Scroll al inicio de la página
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
    
    // Función para reiniciar animaciones
    function reiniciarAnimaciones() {
        console.log("🎬 Reiniciando animaciones...");
        gsap.fromTo(".mil-up", {
            opacity: 0,
            y: 40,
            scale: 0.98,
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".mil-up",
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        });
        console.log("✅ Animaciones reiniciadas.");
    }
    
    // Inicializar Swiper cuando el DOM esté listo
    document.addEventListener("DOMContentLoaded", function () {
        initializeSwiper();
    });
    
    document.addEventListener("swup:contentReplaced", function () {
        console.log("🔄 Contenido reemplazado por Swup");
    
        // Verificar si estamos en home.html antes de cargar animation.js
        if (window.location.pathname.includes("home.html")) {
            console.log("🏠 Estamos en home.html, cargando Animation.js...");
    
            // Eliminar script previo si ya está cargado
            let existingScript = document.querySelector("script[src*='Animation.js']");
            if (existingScript) {
                existingScript.remove();
            }
    
            // Cargar animation.js dinámicamente
            let script = document.createElement("script");
            script.src = "js/Animation.js?v=" + new Date().getTime(); // Evita caché
            script.defer = true;
            script.onload = function () {
                console.log("✅ 'Animation.js' cargado correctamente.");
                iniciarContadores(); // Llamar a la función para activar contadores
            };
            document.body.appendChild(script);
        } else {
            console.log("🚫 No estamos en home.html, no se carga Animation.js.");
        }
    
        // Reiniciar animaciones
        reiniciarAnimaciones();
        ScrollTrigger.refresh();
        $('html, body').animate({ scrollTop: 0 }, 0);
    });
    
    // Función para verificar y ejecutar Animation.js
function cargarYActivarAnimation() {
    if (window.location.pathname.includes("home.html")) {
        console.log("🏠 Estamos en home.html, cargando Animation.js...");

        // Eliminar script previo si ya está cargado
        let existingScript = document.querySelector("script[src*='Animation.js']");
        if (existingScript) {
            existingScript.remove();
        }

        // Cargar animation.js dinámicamente
        let script = document.createElement("script");
        script.src = "js/Animation.js?v=" + new Date().getTime(); // Evita caché
        script.defer = true;
        script.onload = function () {
            console.log("✅ 'Animation.js' cargado correctamente.");
            iniciarContadores(); // Llamar a la función para activar contadores
        };
        document.body.appendChild(script);
    } else {
        console.log("🚫 No estamos en home.html, no se carga Animation.js.");
    }
}

// Ejecutar al cargar la página por primera vez
document.addEventListener("DOMContentLoaded", function () {
    cargarYActivarAnimation();
});

// Ejecutar cada vez que Swup cambie de contenido
document.addEventListener("swup:contentReplaced", function () {
    console.log("🔄 Contenido reemplazado por Swup");
    cargarYActivarAnimation();

    // Reiniciar animaciones
    reiniciarAnimaciones();
    ScrollTrigger.refresh();
    $('html, body').animate({ scrollTop: 0 }, 0);
});

const swup = new Swup({
    containers: ["#swupMain"],
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href*="#"]:not([data-no-swup])'
});

// Función robusta de scroll con espera hasta que el elemento exista
function scrollToAnchor(hash) {
    const attemptScroll = (retries = 10) => {
        const target = document.querySelector(hash);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        } else if (retries > 0) {
            setTimeout(() => attemptScroll(retries - 1), 100);
        }
    };
    attemptScroll();
}

// Manejar enlaces con # lineas de investigación
document.addEventListener('click', event => {
    const link = event.target.closest('a[href*="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    const [url, hash] = href.split("#");

    if (!hash) return;

    event.preventDefault();

    // Navegación dentro de misma página
    if (window.location.pathname === new URL(link.href).pathname) {
        scrollToAnchor("#" + hash);
    } else {
        swup.loadPage({
            url: url + "#" + hash,
            scrollTo: false
        });
    }
});

// Al terminar transición, hacer scroll si hay hash
swup.on('contentReplaced', () => {
    if (window.location.hash) {
        scrollToAnchor(window.location.hash);
    }
});
function scrollToAnchor(hash) {
    const target = document.querySelector(hash);
    if (target) {
        window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 150,
            behavior: 'smooth'
        });
    }
}

// Agrega este listener solo para los clicks del menú
document.querySelector('.sitecia-navbar')?.addEventListener('click', event => {
    const link = event.target.closest('a[href*="#"]');
    if (!link) return;

    const hash = link.getAttribute('href').split("#")[1];
    if (!hash) return;

    event.preventDefault();

    const isSamePage = window.location.pathname === new URL(link.href).pathname;
    const targetHash = `#${hash}`;

    if (isSamePage) {
        scrollToAnchor(targetHash, true); // viene del navbar
    } else {
        swup.loadPage({
            url: link.href,
            scrollTo: false
        });
    }
});

function scrollToAnchor(hash, isFromNavbar = false) {
    const target = document.querySelector(hash);
    if (!target) return;

    const headerHeight = 160; // Ajusta según tu navbar real
    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    // Hacer scroll inicial
    window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
    });

    // Reforzar el scroll luego de 300ms (por si algo animado mueve el DOM)
    setTimeout(() => {
        const retryTarget = document.querySelector(hash);
        if (retryTarget) {
            const retryTop = retryTarget.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({
                top: retryTop,
                behavior: 'auto'
            });
        }
    }, 300);
}

// final lineas de investigación clicks 
