const URL = "https://dog.ceo/api/breeds/image/random"


fetch(URL)
    .then(response => response.json())
    .then(data => {
        const dogImgElement = document.getElementById("dog-img");
        dogImgElement.innerHTML = `
            <img src="${data.message}" alt="Imagen de un perro">
        `;
    })
    .catch(error => {
        console.error('Error:', error);
    });



