// Lista para almacenar los nombres
let listaAmigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const inputNombre = document.getElementById("amigo");
    const listaElementos = document.getElementById("listaAmigos");
    const nombre = inputNombre.value.trim();

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista y actualizar el DOM
    listaAmigos.push(nombre);
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaElementos.appendChild(nuevoElemento);

    // Limpiar el campo de entrada
    inputNombre.value = "";
}

// Función para sortear un amigo
function sortearAmigo() {
    const listaElementos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    // Validar que haya nombres en la lista
    if (listaAmigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado} 🎉`;

    // Vaciar la lista de amigos en el DOM y en la variable
    listaAmigos = [];
    listaElementos.innerHTML = ""; // Elimina todos los elementos de la lista
}
