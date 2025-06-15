function mostrarTablas() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fin = parseInt(document.getElementById("fin").value);
    const resultado = document.getElementById("resultado");
    const error = document.getElementById("error");

    resultado.innerHTML = "";
    error.textContent = "";

    // Validaciones
    if (isNaN(inicio) || isNaN(fin)) {
      error.textContent = "Por favor ingresa números válidos.";
      return;
    }

    if (inicio < 1 || fin > 10 || inicio >= fin) {
      error.textContent = "El número inicial debe ser menor que el final, y ambos entre 1 y 10.";
      return;
    }

    for (let i = inicio; i <= fin; i++) {
      const contenedor = document.createElement("div");
      contenedor.className = "tabla";
      contenedor.innerHTML = `<h2>Tabla del ${i}</h2>`;
      for (let j = 1; j <= 10; j++) {
        contenedor.innerHTML += `${i} × ${j} = ${i * j}<br>`;
      }
      resultado.appendChild(contenedor);
    }
  }