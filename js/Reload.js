    (function () {
        // Función para recargar scripts y estilos
        function reloadAssets() {
            // Recargar CSS
            const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
            stylesheets.forEach((link) => {
                const href = link.href.split('?')[0]; // Remueve cualquier query string existente
                link.href = `${href}?v=${new Date().getTime()}`; // Agrega un timestamp único
            });

            // Recargar JavaScript
            const scripts = document.querySelectorAll('script[src]');
            scripts.forEach((script) => {
                const src = script.src.split('?')[0]; // Remueve cualquier query string existente
                const newScript = document.createElement('script');
                newScript.src = `${src}?v=${new Date().getTime()}`; // Agrega un timestamp único
                newScript.async = script.async;
                script.parentNode.replaceChild(newScript, script); // Reemplaza el script viejo por el nuevo
            });
        }

        // Ejecutar la recarga de assets cada vez que se detecte una navegación o cambio
        window.addEventListener('load', reloadAssets);
    })();

