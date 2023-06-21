const tableBody = document.querySelector('tbody');
const inputSearch = document.querySelector('input#inputSearch');

const armarFilaHTML = (serv) => {
    return `
        <tr>
            <td class="class-table-number">${serv.id}</td>
            <td>${serv.nombre}</td>
            <td>$ ${serv.precio}</td>
            <td><button id="${serv.id}" class="button button-outline button-big-emoji">🤍</button></td>
        </tr>`;
};

const filtrarServicios = () => {
    let arrayResultado = serviciosLegales.filter((servicio) => servicio.nombre.toLowerCase().includes(inputSearch.value.trim().toLowerCase()));
    if (arrayResultado.length > 0) {
        cargarServicios(arrayResultado);
    }
};

inputSearch.addEventListener('search', filtrarServicios);

function cargarServicios(array) {
    tableBody.innerHTML = '';
    array.forEach((servicio) => {
        tableBody.innerHTML += armarFilaHTML(servicio);
    });
}

const activarClickEnBotonesFav = () => {
    const botonesFav = document.querySelectorAll('button.button.button-outline.button-big-emoji');
    for (let botonFav of botonesFav) {
        botonFav.addEventListener('click', () => {
            let resultadoServicio = serviciosLegales.find((serv) => serv.id === parseInt(botonFav.id));
            favoritos.push(resultadoServicio);
            guardarEnLocalStorage();
            mostrarMensajes(`El servicio ${resultadoServicio.nombre} se guardó en favoritos...`, 'green');
        });
    }
};

activarClickEnBotonesFav();

cargarServicios(serviciosLegales);
