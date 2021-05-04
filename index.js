// keep track of state
let state = {
  data: {}
};

fetch('data.json')
  .then((response) => { // download
    return response.json();
  })
  .then((downloadedData) => { // encoding
    state.data = downloadedData; // when the data is ready, assign state.data to the downloaded data
    console.log(state.data); // sanity check to see if our data has been downloaded successfully
    // remove console log before you turn in your project

    // render cards after data has been loaded into state
    renderCards();
  })
  .catch((error) => {
    console.error(error);
  });

// create a single card using vanilla js
function createCard(aSinglePlace) {
  let newCol = document.createElement('div');
  newCol.classList.add('col-3');

  let newCard = document.createElement('div');
  newCard.classList.add('card');

  let newCardBody = document.createElement('div');
  newCardBody.classList.add('card-body');

  let newCardTitle = document.createElement('h5');
  newCardTitle.classList.add('card-title');
  newCardTitle.textContent = aSinglePlace.name;

  let newCardText = document.createElement('p');
  newCardText.classList.add('card-text');
  newCardText.textContent = "Star rating: " + aSinglePlace.stars;


  newCardTitle.appendChild(newCardText);
  newCardBody.appendChild(newCardTitle);
  newCard.appendChild(newCardBody);
  newCol.appendChild(newCard);

  return newCol;
}

// loop over the data and create a card for each object
function renderCards() {
  let linkToRow = document.querySelector('#feed')
  linkToRow.innerHTML = "";

  state.data.places.forEach(function(place) {
    linkToRow.appendChild(createCard(place));
  });
}