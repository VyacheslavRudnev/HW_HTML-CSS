import { films_data } from './data.js'
let films = films_data
addFilms(films)

document.getElementById('sort_mode_btn').addEventListener('click', ()=>{
    let filter = document.getElementById('filter')
    let options = document.getElementById('options')
    console.log(filter.style.height)
    if(filter.style.height === '60px'){
        options.style.display = 'none'
        filter.style.height = '0px';
    }else{
        filter.style.height = '60px';
        setTimeout(()=>{ options.style.display = 'flex' }, 300)
    }
})

document.getElementById('edit_mode_btn').addEventListener('click', ()=>{
    let edit_div = document.querySelectorAll('.edit_div')
    edit_div.forEach((item)=>{
        console.log(item)
        if(item.style.display === 'flex'){
            item.style.display = 'none'
        }else{
            item.style.display = 'flex'
        }
    })
})

document.getElementById('sort_by_year').addEventListener('click', ()=>{
    films = films.sort((a, b)=>{
        return b.year - a.year
    })
    clearFilms()
    addFilms(films)
})

document.getElementById('sort_by_rate').addEventListener('click', ()=>{
    films = films.sort((a, b)=>{
        return b.score - a.score
    })
    clearFilms()
    addFilms(films)
})

document.getElementById('search_query').addEventListener('input', (e)=>{
    let new_films = []
    for (let i = 0; i < films.length; i++) {
        let searchStr = films[i].actors.toString().toLowerCase() + films[i].name.toLowerCase()
        if(searchStr.includes(e.target.value.toLowerCase())){
            new_films.push(films[i])
            clearFilms()
            addFilms(new_films)
        }
    }
})

function clearFilms(){
    document.getElementById('container_div').innerHTML = ''
}

function addFilms(films) {
    let container_div = document.getElementById('container_div')
    for (let i = 0; i < films.length; i++) {
        container_div.innerHTML += `
        <div id='film_${films[i].id}' class="frame_film">
            <div class="team-grid__member hover">
                <div class="film__info">
                    <div class="center-vert-content">
                        <h3 class="film__name">${films[i].name}</h3>
                        <p class="film__type">${films[i].type}</p>
<!--                        <a class="read_more">Read more</a>-->
                        <a class="read_more" data-id="${films[i].id}">Read more</a>
                    </div>
                </div>
                <img class="img_film" src='${films[i].img}'>
            </div>
            <div class="edit_div">
                <a onclick="" class="delete_btn" style="background: #D68D2C">Edit</a>
                <a id="del_${films[i].id}" name="del_btn" onclick="" class="del_func delete_btn">Delete</a>
            </div>
        </div>
        `
    }
}

document.addEventListener('click', (e)=>{
    if(e.target.name === 'del_btn'){
        let film_id = e.target.id.slice(4)
        let id_div = `film_${film_id}`
        document.getElementById(id_div).remove()
        for (const i in films) {
            if(films[i].id == film_id){
                films.splice(i, 1)
                console.log(films)
            }
        }
    }
})
