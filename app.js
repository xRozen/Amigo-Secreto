let amigos = []

function agregarAmigo() {
    // Capturar el valor del input
    let nombre = document.getElementById('amigo').value;

    // Verificar si el input esta vacio
    if (nombre == '') {
        alert('Por favor, ingrese un nombre');
        return;
    }
    
    // Convertir la primera letra a mayuscula y el resto a minisculas
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();
    amigos.push(nombre); // Agregar el nombre a la lista de amigos
    limpiarEntrada();
    mostrarNombres();
    //console.log(amigos);
}

// Limpar el texto del input
function limpiarEntrada() {
    document.getElementById('amigo').value = '';
}

// Mostar una lista con los nombres de los amigos
function mostrarNombres() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li'); // Se crea un elemento <li> por cada amigo
        item.textContent = amigos[i]; // Se agrega el nommbre al elemento <li>
        lista.appendChild(item); // Se agrega el elemento <li> a la lista
    }
}

function sortearAmigo() {
    // Verifica si la lista esta vacia
    if (amigos.length === 0) {
        alert('Por favor, ingrese al menos un nombre');
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length); // Genera un numero como indice de la lista
    let amigoSorteado = amigos[indice]; // Se obtiene el nombre sorteado

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`; // Se muestra el nombre sorteado
    limpiarLista();
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}