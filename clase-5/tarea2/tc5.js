//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonTotal = document.querySelector('#tiempoTotal');

$botonTotal.onclick = function(){
	
	
	const $horasVideo = document.querySelectorAll('.horas input');
	const $minutosVideo = document.querySelectorAll('.minutos input');
	const $segundosVideo = document.querySelectorAll('.segundos input');
	let arrayHoras = [];
	let totalHorasVideo = 0; 
	for (let i = 0; i < $horasVideo.length; i++){
		arrayHoras.push(Number($horasVideo[i].value));
		totalHorasVideo += (Number(arrayHoras[i].value));
	}

	let arrayMinutos = [];
	let totalMinutosVideo = 0;
	for (let i = 0; i < $minutosVideo.length; i++){
		arrayMinutos.push(Number($minutosVideo[i].value));
		totalMinutosVideo += (Number(arrayMinutos[i].value));
	}

	let arraySegundos = [];
	let totalSegundosVideo = 0;
	for (let i = 0; i < $segundosVideo.length; i++){
		arraySegundos.push(Number($segundosVideo[i].value));
		totalSegundosVideo += (Number(arraySegundos[i].value));
	}

	const totalSeconds = tiempoASegundos(totalSegundosVideo,totalMinutosVideo,totalHorasVideo);
	let horas = Math.floor(totalSeconds/3600);
	let minutos = Math.floor((totalSeconds) % 3600 / 60);
	let segundos = (totalSeconds % 60);
	alert(`${horas} horas, ${minutos} minutos ${segundos} segundos`);

	const newTitle = document.querySelector('#resultado');
	newTitle.innerText = (`${horas} horas, ${minutos} minutos ${segundos} segundos`)
	
	return false;
}

function tiempoASegundos(segundos,minutos,horas){
	return (segundos, minutos*60, horas*60*60) ;
}




//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."