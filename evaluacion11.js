const quoteElement = document.getElementById('quote');
const btnElement = document.getElementById('btn');

// Función para obtener una nueva frase de la API
function obtenerFrase() {
  fetch('https://geekjokes.sameerkumar.website/api?format=json')
    .then(response => response.json())
    .then(data => {
      // Actualizar el contenido del elemento de frase con la nueva frase obtenida
      quoteElement.textContent = data.joke;
    })
    .catch(error => console.error('Error al obtener la frase:', error));
}

// Agregar evento de clic al botón para obtener una nueva frase
btnElement.addEventListener('click', obtenerFrase);
