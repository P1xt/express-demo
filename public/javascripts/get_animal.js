// eslint-disable-next-line no-unused-vars
const getAnimal = (id) => {
  // fetch the data from the API
  fetch(`/api/animal/${id}`)
    // then you have to pull out the json
    // because fetch returns a promise, so you
    // have to wait for the promise to resolve
    // then pass just the json on to be used
    .then(res => res.json())

    // catch if there was an error
    // .catch(error => console.error('Error:', error))

    // if there wasn't an error, then use the json
    // that was returned from the promise
    .then((response) => {
      // get the name element from the DOM
      // and update it with the data retrieved
      const name = document.getElementById('name');
      name.textContent = response.name;

      // get the species element from the DOM
      // and update it with the data retrieved
      const species = document.getElementById('species');
      species.textContent = response.species;

      // get the type element from the DOM
      // and update it with the data retrieved
      const type = document.getElementById('type');
      type.textContent = response.type;

      // get the div with the animal id and unhide it
      // by emptying the classList which removes the
      // hidden class
      const animal = document.getElementById('animal');
      animal.classList = [];
    });
};
