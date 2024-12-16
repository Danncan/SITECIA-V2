  /***************************
    
    Main Animation 

    ***************************/
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll(".mil-counter");
      
        const startCounter = (counter) => {
          const target = +counter.getAttribute("data-target"); // Obtén el valor objetivo
          const increment = target / 200; // Haz el incremento más pequeño para ralentizar la animación
          let current = 0;
      
          const updateCounter = () => {
            current += increment; // Incrementa el valor
            if (current < target) {
              counter.textContent = Math.ceil(current); // Actualiza el valor mostrado
              setTimeout(updateCounter, 20); // Cambia la velocidad de actualización aquí
            } else {
              counter.textContent = target; // Asegúrate de que termine en el número exacto
            }
          };
      
          updateCounter();
        };
      
        const observer = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const counter = entry.target;
                startCounter(counter);
                observer.unobserve(counter); // Detén la observación una vez que inicie
              }
            });
          },
          { threshold: 0.5 } // Activa cuando el 50% del elemento sea visible
        );
      
        counters.forEach((counter) => {
          observer.observe(counter); // Observa cada contador
        });
      });
      
      