
        // Navegación suave
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const seccion = document.querySelector(this.getAttribute('href'));
                seccion.scrollIntoView({ behavior: 'smooth' });
            });
        });

        // Manejo del formulario
        document.getElementById('formulario').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensaje enviado. ¡Gracias por contactarme!');
            this.reset();
        });

        // Demo 1: Cambiar color
        const colores = ['#3498db', '#e74c3c', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c'];
        let colorActual = 0;

        function cambiarColor() {
            colorActual = (colorActual + 1) % colores.length;
            document.getElementById('caja-color').style.background = colores[colorActual];
        }

        // Demo 2: Contador
        let contador = 0;

        function incrementar() {
            contador++;
            document.getElementById('contador').textContent = contador;
        }

        function decrementar() {
            contador--;
            document.getElementById('contador').textContent = contador;
        }

        function resetear() {
            contador = 0;
            document.getElementById('contador').textContent = contador;
        }

        // Demo 3: Mostrar/Ocultar
        function toggleTexto() {
            const texto = document.getElementById('texto-oculto');
            if (texto.style.display === 'none') {
                texto.style.display = 'flex';
            } else {
                texto.style.display = 'none';
            }
        }

        // Demo 4: Animación
        function animar() {
            const caja = document.getElementById('caja-animada');
            caja.classList.remove('animando');
            setTimeout(() => {
                caja.classList.add('animando');
            }, 10);
        }

        // Demo 5: Lista dinámica
        function agregarItem() {
            const input = document.getElementById('nuevo-item');
            const texto = input.value.trim();
            
            if (texto !== '') {
                const lista = document.getElementById('lista-items');
                const li = document.createElement('li');
                li.textContent = texto;
                li.onclick = function() {
                    this.remove();
                };
                lista.appendChild(li);
                input.value = '';
            }
        }

        // Demo 6: Reloj
        let intervaloReloj = null;

        function iniciarReloj() {
            if (intervaloReloj) return;
            
            actualizarReloj();
            intervaloReloj = setInterval(actualizarReloj, 1000);
        }

        function actualizarReloj() {
            const ahora = new Date();
            const horas = String(ahora.getHours()).padStart(2, '0');
            const minutos = String(ahora.getMinutes()).padStart(2, '0');
            const segundos = String(ahora.getSeconds()).padStart(2, '0');
            document.getElementById('reloj').textContent = `${horas}:${minutos}:${segundos}`;
        }

        function detenerReloj() {
            if (intervaloReloj) {
                clearInterval(intervaloReloj);
                intervaloReloj = null;
            }
        }

        // Permitir agregar item con Enter
        document.getElementById('nuevo-item').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                agregarItem();
            }
        });
 