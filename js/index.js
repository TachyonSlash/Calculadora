
let resultado = document.getElementById('resultado');

function asignar(valor) {
    resultado.value += valor;
}

let calcular = () => {
    resultado.value = eval(resultado.value);
}

function limpiar() {
    resultado.value = '';
}

let borrar = () => {
    resultado.value = resultado.value.substring(0, resultado.value.length - 1);
}

let raiz = () => {
    resultado.value = Math.sqrt(resultado.value);
}

let cuadrado = () => {
    resultado.value = Math.pow(resultado.value, 2);
}

let porcentaje = () => {
    resultado.value = resultado.value / 100;
}

let cubo = () => {
    resultado.value = Math.pow(resultado.value, 3);
}