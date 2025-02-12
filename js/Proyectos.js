
        let swiperInstance;

        function initializeSwiper() {
            swiperInstance = new Swiper('.swiper-container', {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
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
                    1024: { slidesPerView: 2 },
                },
            });
        }

        document.addEventListener("DOMContentLoaded", initializeSwiper);

        // Solución para reiniciar Swiper al volver a la página
        window.addEventListener('pageshow', function (event) {
            if (event.persisted || performance.getEntriesByType("navigation")[0].type === 'back_forward') {
                if (swiperInstance) swiperInstance.destroy(); // Destruir instancia antigua
                initializeSwiper(); // Crear una nueva instancia
            }
        });

        // Recargar la página si se carga desde la caché del navegador
        window.addEventListener('pageshow', function (event) {
            if (event.persisted) {
                window.location.reload();
            }
        });