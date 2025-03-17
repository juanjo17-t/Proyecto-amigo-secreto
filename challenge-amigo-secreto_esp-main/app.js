const amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const nombreNormalizado = nombre.toLowerCase();

    if (!nombre) {
        alert("Ingresa un nombre válido");
        return;
    }

    const nombresNormalizados = amigos.map(amigo => amigo.toLowerCase());
    if (nombresNormalizados.includes(nombreNormalizado)) {
        alert("El nombre ya ha sido agregado");
        return;
    }

    amigos.push(nombre);
    input.value = '';
    mostrarLista();
}

function mostrarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear");
        return;
    }

    // Selecciona un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];

    // Elimina el nombre sorteado de la lista
    amigos.splice(indiceAleatorio, 1);

    // Muestra el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto sorteado es: ${nombreSorteado}</li>`;

    
    // Ocultar la lista de amigos al finalizar el sorteo
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';  // Hace que la lista sea invisible
}
