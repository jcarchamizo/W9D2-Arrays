const estudiantes = [
    "Ferdi",
    "Ana",
    "Luis",
    "María",
    "Carlos",
    "Sofía",
    "Diego",
    "Laura",
    "Pablo",
    "Elena"
  ];

  const galletas = [
    "Este fin de semana debes de escuchar tus sueños, porque contienen la clave para encontrar un tesoro cerca de tu casa.",
    "La paciencia es la llave que abre las puertas del éxito en tu vida.",
    "Una sorpresa agradable te espera muy pronto, mantente atento.",
    "El esfuerzo que has puesto pronto dará frutos que te sorprenderán.",
    "Confía en tu intuición, te guiará por el camino correcto.",
    "Un cambio positivo está en el horizonte, prepárate para recibirlo.",
    "La felicidad está más cerca de lo que imaginas, abre bien los ojos.",
    "No temas equivocarte, cada error es una lección valiosa.",
    "La creatividad será tu mejor aliada en los próximos días.",
    "Una nueva amistad traerá alegría inesperada a tu vida."
  ];

  const resultadoDiv = document.getElementById('resultado');
  const boton = document.getElementById('botonVaticinio');
  const confettiContainer = document.getElementById('confetti-container');
  const sound = document.getElementById('sound');

  boton.addEventListener('click', () => {
    // Sonido
    sound.currentTime = 0;
    sound.play();

    // Selección aleatoria
    const indiceEstudiante = Math.floor(Math.random() * estudiantes.length);
    const indiceGalleta = Math.floor(Math.random() * galletas.length);

    const estudiante = estudiantes[indiceEstudiante];
    const mensaje = galletas[indiceGalleta];

    resultadoDiv.innerHTML = `<strong>Vaticinio para ${estudiante}:</strong> ${mensaje}`;
    
    // Animación fade in
    resultadoDiv.classList.remove('show');
    // Forzar reflow para reiniciar animación
    void resultadoDiv.offsetWidth;
    resultadoDiv.classList.add('show');

    // Confetti
    lanzarConfetti(100);
  });

  // Función para crear confetti
  function lanzarConfetti(cantidad) {
    // Limpiar confetti viejo
    confettiContainer.innerHTML = '';

    for(let i = 0; i < cantidad; i++) {
      const confetti = document.createElement('div');
      confetti.classList.add('confetti');
      
      // Tamaño aleatorio
      const size = Math.random() * 8 + 6 + 'px';
      confetti.style.width = size;
      confetti.style.height = size;
      
      // Color aleatorio de una paleta
      const colors = ['#f9a825', '#ffca28', '#fbc02d', '#fff176', '#ffeb3b'];
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

      // Posición horizontal inicial aleatoria
      confetti.style.left = Math.random() * window.innerWidth + 'px';
      confetti.style.top = '-20px';

      // Animación duración y delay aleatorios
      const duration = (Math.random() * 3 + 2) + 's';
      const delay = (Math.random() * 2) + 's';

      confetti.style.animationDuration = duration;
      confetti.style.animationDelay = delay;

      confettiContainer.appendChild(confetti);

      // Eliminar confetti al terminar la animación para limpiar DOM
      confetti.addEventListener('animationend', () => {
        confetti.remove();
      });
    }
  }