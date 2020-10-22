const $botonAccion = document.querySelector('#accion');

$botonAccion.onclick = function(){
    const name = document.querySelector('#nombre').value;
    const lastname = document.querySelector('#apellido').value;
    const age = Number(document.querySelector('#edad').value);
    let newTitle = document.querySelector('#resultado');
    newTitle.innerText = ('Bienvenido: ' + name + lastname + ' tu tienes ' + age); 

    return false;
}
