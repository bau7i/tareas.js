//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $numeros = document.querySelectorAll('.ol li');
const arrayNumeros = [];

for (let i = 0; i < $numeros.length; i++){
	arrayNumeros.push(Number($numeros[i].innerText));
	//console.log(arrayNumeros);
}


function promedio (array){
	let prom = 0;
	let suma = 0;
	for (let i = 0; i < array.length; i++){
		suma += (Number(array[i]));
		//console.log(suma);
	}
	prom = suma / array.length;
	return (prom);
}

function menor (array){
	let menor = array[0];
	for (let i = 0; i < array.length; i++){
		console.log(array[i]);
		if ((array[i]) < menor) {
			menor = array[i];
		}
	}
	return menor;
}

const resultProm = promedio(arrayNumeros);
const newProm = document.querySelector('.emPromedio');
newProm.innerText = (`El promedio es ${resultProm}`);

const numeroMenor = menor(arrayNumeros);
const newMenor = document.querySelector('.emPequenio');
newMenor.innerText = (`El menor numero es ${numeroMenor}`);