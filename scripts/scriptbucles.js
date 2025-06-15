const medidas = [[175, 134], 165, [80, 187, [73, 26], 92]];
const nombres = [
  ["Kitty", "Toby", "Didi"],               // mascotas
  ["Pedro", "Jose", "Roberto"],            // hombres
  ["Carla", "Rosa", "Julieta"]             // mujeres
];

function mostrarTarjetas() {
  const contenedor = document.getElementById("contenedorTarjetas");
  contenedor.innerHTML = ""; // Limpiar

  // Datos numéricos
  const numeros = [medidas[2][2][1], medidas[0][1], medidas[2][3]];
  const nombresEspecificos = [nombres[2][1], nombres[1][2]];
  const mascotas = nombres[0];

  // Tarjeta de Números
  const cardNumeros = `
    <div class="card">
      <i class="fas fa-hashtag"></i>
      <h3>Números clave</h3>
      <p>📌 26</p>
      <p>📌 134</p>
      <p>📌 92</p>
    </div>
  `;

  // Tarjeta de Nombres
  const cardNombres = `
    <div class="card">
      <i class="fas fa-user"></i>
      <h3>Nombres importantes</h3>
      <p>👤 Rosa</p>
      <p>👤 Roberto</p>
    </div>
  `;

  // Tarjeta de Mascotas
  const mascotasLinea = mascotas.join(", ");
  const mascotasHTML = mascotas.map(m => `<p>🐾 ${m}</p>`).join("");
  const cardMascotas = `
    <div class="card">
      <i class="fas fa-dog"></i>
      <h3>Mascotas</h3>
      <p style="font-style: italic;">${mascotasLinea}</p>
      <hr>
      ${mascotasHTML}
    </div>
  `;

  contenedor.innerHTML += cardNumeros + cardNombres + cardMascotas;
}