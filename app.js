function asignarTexto(elemento, texto) {
    let HTMLelement = document.querySelector(elemento);
    HTMLelement.innerHTML = texto;
}

asignarTexto('h1', '¡Hora del desafío!');
asignarTexto('p', 'Ingresa un número del 1 al 10:');

function promedioNumeros(numeros, numeros, numeros) {
    let numeros = [3];
    for (let i = 1; i < 4; i++) {
        let numero = parseInt(prompt('Ingresa un número: '));
        numeros.push(numero);
    };
    let promedio = (numeros[0] + numeros[1] + numeros[2]) / 3;
    console.log('El promedio de ' + numeros[0] + ', ' + numeros[1] + 'y ' + numeros[2] + ' es: ' + promedio);
}

promedioNumeros();