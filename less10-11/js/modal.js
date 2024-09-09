import { films_data } from './data.js'
let films = films_data

function showModal(film) {
    let modalContent = document.getElementById('modal-details')
    modalContent.innerHTML = `
        <h2>${film.name}</h2>
        <p>Score: ${film.score}</p>
        <p>Actors: ${film.actors.join(', ')}</p>
        <p>Year: ${film.year}</p>
        <p>Duration: ${film.duration} min</p>
        <p>Type: ${film.type}</p>
    `
    let modalImg = document.getElementById('modal-img');
    modalImg.src = film.img;
    modalImg.alt = `${film.name} Poster`

    let modal = document.getElementById('modal')
    modal.style.display = 'block'
}

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('modal').style.display = 'none'
})

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('read_more')) {
        let film_id = e.target.closest('.frame_film').id.slice(5)
        let film = films.find(f => f.id == film_id)

        showModal(film)
    }
})