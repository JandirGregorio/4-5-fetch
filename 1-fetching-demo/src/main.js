import { updateDogImage, updateError } from "./dom-helpers";

// A default URL to use if an error occurs
const DEFAULT_DOG_SRC = "https://images.dog.ceo/breeds/entlebucher/n02108000_1948.jpg"

// Fetch a dog when the button is clicked
const dogButton = document.querySelector('#new-dog-image-button');
dogButton.addEventListener('click', () => {
  // 1. Invoke fetch with an API endpoint. A promise is returned.
  // this is how we're sending our request
  // fetch is in charge of making the request for my application
  // it needs: url + method
  const fetchPromise = fetch('https://dog.ceo/api/breeds/image/random');

  console.log(fetchPromise); // at this point, this will be 'pending'
  // 2. Define promise handlers with .then and .catch
  fetchPromise
    .then((response) => {
      // 3. Throw an error if the response fails
      if (!response.ok) { // checking to see if the promise resolves
        // Remember, this error is caught in the .catch() below
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`)
      }

      // 4. Start reading the response body's ReadableStream - a json wrapped in a promise
      const readingPromise = response.json(); //json returns a promise so we need to handle it with the next .then
      return readingPromise;
    })
    .then((responseBody) => {
      // 5. When the response body is read, do something with it!
      // You often will want to print out the responseBody to see its structure
      console.log(responseBody);
      const dogImageSrc = responseBody.message;
      updateDogImage(dogImageSrc);
    })
    .catch((err) => {
      // 6. Handle Errors
      updateDogImage(DEFAULT_DOG_SRC);
      updateError(`An error occurred: ${err.message}`);
    });
});