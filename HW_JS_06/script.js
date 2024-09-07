let options = {
    method: 'GET',
}

let url = `https://jsonplaceholder.typicode.com/photos`
let container = document.getElementById('image-container')

function getPhotos() {
    fetch(url, options)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            refreshPhotosData(data)
        })
        .catch(err => console.log(err))
}

function refreshPhotosData(data) {
    data.forEach(image => {
        const photoCard = document.createElement('div')
        photoCard.classList.add('photo-card')

        const imgElement = document.createElement('img')
        imgElement.src = image.url

        const idElement = document.createElement('p')
        idElement.textContent = `${image.id}`

        const color = extractColorFromUrl(image.url)

        if (color) {
            const colorText = document.createElement('p')
            colorText.textContent = `Колір: ${color}`
            photoCard.appendChild(colorText)
            photoCard.style.borderColor = color //додавання кольору рамки
        }

        photoCard.appendChild(imgElement)
        photoCard.appendChild(idElement)
        container.appendChild(photoCard)
    })
}
//функція для вибору значення кольору
function extractColorFromUrl(url) {
    const parts = url.split('/')
    const colorHex = parts[parts.length - 1]
    if (/^[0-9A-Fa-f]{6}$/.test(colorHex)) {
        return `#${colorHex}`
    } else {
        return null;
    }
}

getPhotos()


