const favs = [{ codigo: 2, tipo: "Mediacion Laboral", precio: 9000 },
{ codigo: 3, tipo: "Mediacion Escolar", precio: 9000 },]

const serviciosLegales = [{ id: 1, nombre: "Mediacion Familiar", precio: 100000 },
{ id: 2, nombre: "Mediacion Laboral", precio: 9000 },
{ id: 3, nombre: "Mediacion Escolar", precio: 9000 },
{ id: 4, nombre: "Asesoramiento legal a copropiedades", precio: 200000 },
{ id: 5, nombre: "Actualización legal según nueva ley de copropiedad", precio: 200000 }
]

const guardarEnLocalStorage = () => {
    if (favoritos.length > 0) {
        localStorage.setItem('Favoritos', JSON.stringify(favoritos))
    }
}

const recuperarFavsDeLocalStorage = () => {
    if (localStorage.getItem('Favoritos')) {
        return JSON.parse(localStorage.getItem('Favoritos'))
    } else {
        return []
    }
}

const favoritos = recuperarFavsDeLocalStorage()

const mostrarMensajes = (msg, bgcolor) => {
    const divMsg = document.querySelector('div.toast-msg')
    divMsg.textContent = msg || ''
    divMsg.style.background = bgcolor || 'darkslateblue;'
}