// MENU RESPONSIVO
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('activo');
});

// FUNCIÓN SALUDO HERO
function saludo() {
    alert("¡Bienvenido al NeonFest! El evento inicia en 10 días. ¡Prepárate!");
}

// SELECCIÓN DE BOLETOS
function seleccionar(tipo) {
    const texto = document.getElementById('boletoSeleccionado');
    texto.innerText = "Has seleccionado el pase: " + tipo;
    texto.style.textShadow = "0 0 10px #00f5ff";
}

// VALIDACIÓN DE FORMULARIO
const form = document.getElementById('form-registro');
const respuesta = document.getElementById('respuesta');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se recargue la página
    
    const nombre = document.getElementById('nombre').value;
    const categoria = document.getElementById('categoria').value;
    
    respuesta.innerHTML = `<p style="color: #00f5ff; margin-top:15px;">
        ¡Éxito! Gracias ${nombre}, te avisaremos sobre lo mejor de ${categoria}.
    </p>`;
    
    form.reset(); // Limpia el formulario
});
