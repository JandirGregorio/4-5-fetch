import './style.css'

const newImg = document.createElement('img');
const errorMessage = document.querySelector('.error');
const newPokemon = fetch('https://pokeapi.co/api/v2/pokemon/charzard');

newPokemon
  .then((response) => {
    if (!response.ok) {
      throw Error(`Something happened ${response.status} ${response.statusText}`);
    }

    const readingResponse = response.json();
    return readingResponse;
  })
  .then((responseBody) => {
    newImg.src = responseBody.sprites.other['official-artwork'].front_default;
  })
  .catch((error) => {
    errorMessage.textContent = `something went south ${error.message}`;
  });

// newImg.src ='https://i.pinimg.com/736x/1e/4d/41/1e4d41b1e7af4b6519f35133c2eaa9e0.jpg';

document.querySelector('#app').append(newImg);
