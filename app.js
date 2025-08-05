//Array que contiene los nombres de los amigos
let amigos = [];

//Creamos una función que valida los nombres ingresados y los guarda en el Array 'amigos'
function agregarAmigos() {
    // Recibe el valor ingresado
    let nombre = document.getElementById('amigo').value;
    //Valida si el valor ingresado es un número o está vacío, ya que el valor vacío es considerado Int
    if (!isNaN(nombre)) {
        alert('Ingrese un nombre válido');
    //Sino lo guarda en el Array
    } else {
        amigos.push(nombre);
        console.log(amigos);
    }
    limpiarCaja();
    mostrarAmigos();
};

//Creamos una función que limpia la caja donde se ingresa el valor
function limpiarCaja() {
    let cajaVacia = document.querySelector('#amigo');
    cajaVacia.value = ''; 
};

//Función que muestra en pantalla los amigos agregados
function mostrarAmigos(nombre) {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    //Por cada amigo en el Array, se crea una "lista" y se muestra en pantalla
    amigos.forEach((amigo) => {
        lista.innerHTML += `<li>${amigo}</li>`;
    })
};

//Función que sortea al amigo
function sortearAmigo() {
    //Si la longitud del Array es mayor o igual a 2 se sortea un número y ese número va a ser la posición del Array para elegir al amigo 
    if (amigos.length >= 2) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        console.log(numeroAleatorio);
        let amigoAleatorio = amigos[numeroAleatorio];
        document.getElementById('resultado').innerHTML = `El amigo secreto es ${amigoAleatorio}`;
        //Si la longitud es menor a 2, se le avisa al usuario que debe agregar más amigos
    } else {
        alert('No es posible jugar con menos de 2 jugadores');
    }
};




