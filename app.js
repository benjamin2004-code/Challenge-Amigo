// Lista para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

/**
 * Función para actualizar la lista de amigos en la interfaz
 */
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nombre, index) => {
        const item = document.createElement("li");
        item.textContent = nombre;
        item.classList.add("name-item");

        // Botón para eliminar un amigo de la lista
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "X";
        botonEliminar.classList.add("eliminar");
        botonEliminar.onclick = () => eliminarAmigo(index);

        item.appendChild(botonEliminar);
        lista.appendChild(item);
    });
}

/**
 * Función para eliminar un amigo de la lista
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

/**
 * Función para sortear un amigo al azar y mostrarlo en la pantalla
 */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    mostrarResultado(nombreSorteado);
}

/**
 * Función para mostrar el nombre sorteado en la pantalla
 */
function mostrarResultado(nombre) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<h2 class="resultado-nombre"> ¡Tu amigo secreto es: ${nombre}! 🎉</h2>`;
}
