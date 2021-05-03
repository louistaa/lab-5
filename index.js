// anything that changes that you need to keep track of goes into state
let state = {
  data: {},
  minimumStars: 0
}

fetch('data.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    state.data = data;
    console.log(state.data);

    renderCards();
  })
  .catch((error) => {
    console.error(error);
  }) 


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
    // filtering the cards
    if (place.stars >= state.minimumStars) {
      linkToRow.appendChild(createCard(place));
    }
  });
}

// add eventlistener to slider to update state
let LinkToSlider = document.querySelector('#formControlRange');
LinkToSlider.addEventListener('change', function() {
  state.minimumStars = LinkToSlider.value;
  renderCards();
})