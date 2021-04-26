// one object containing an array of objects, exactly how JSON is structured
let data = {
  places: [
    {id: 1, name: "McDonald's", stars: 4},
    {id: 2, name: "Shake Shack", stars: 5},
    {id: 3, name: "In and Out", stars: 5},
    {id: 4, name: "Arby's", stars: 3},
    {id: 5, name: "Wendy's", stars: 4},
    {id: 6, name: "Jack In the Box", stars: 2},
    {id: 7, name: "iHop", stars: 1},
  ]
}

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

  data.places.forEach(function(place) {
    linkToRow.appendChild(createCard(place));
  });
}

renderCards(); // default view