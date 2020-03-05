
//Compilación numeros en Strings
const rango_0_9 = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
const rango_10_19 = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
const rango_20_29 = ['veinte', 'veintiuno', 'veintidos', 'veintitres', 'veinticuatro', 'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'];
const rango_30_39 = ['treinta', 'treinta y uno', 'treinta y dos', 'treinta y tres', 'treinta y cuatro', 'treinta y cinco', 'treinta y séis', 'treinta y siete', 'treinta y ocho', 'treinta y nueve'];
const rango_40_49 = ['cuarenta', 'cuarenta y uno', 'cuarenta y dos', 'cuarenta y tres', 'cuarenta y cuatro', 'cuarenta y cinco', 'cuarenta y séis', 'cuarenta y siete', 'cuarenta y ocho', 'cuarenta y nueve'];
const rango_50_60 = ['cincuenta', 'cincuenta y uno', 'cincuenta y dos', 'cincuenta y tres', 'cincuenta y cuatro', 'cincuenta y cinco', 'cincuenta y séis', 'cincuenta y siete', 'cincuenta y ocho', 'cincuenta y nueve', 'sesenta'];

//Union de las arrays
const valores = [...rango_0_9, ...rango_10_19, ...rango_20_29, ...rango_30_39, ...rango_40_49, ...rango_50_60];

//Creacion de un array de numeros para enlazarlos a los valores en string
let llaves = [];

for(let i = 0; i <= 60; i++) {
    llaves.push(i);
};

//Enlace de los keys y sus valores
let map = new Map();

for(let i = 0; i <= llaves.length; i++) {
    map.set(llaves[i], valores[i]);
}

//////////////////////////////////////////////////////////////

numToLet = (num) => {
    let numero = map.get(num);
    return numero;
}

submit = () => {
    let nombre = document.getElementById('nombre').value;
    let edad = parseInt(document.getElementById('edad').value);
    let area = document.getElementById('user-id');

    area.textContent = `${nombre} --> ${numToLet(edad)}`;
};

//////////////////////////////////////////////////////////////



