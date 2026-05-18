const collection = [
  { pikminName: "Red Pikmin", type: "Red", game: 1 },
  { pikminName: "Yellow Pikmin", type: "yellow", game: 1 },
  { pikminName: "Blue Pikmin", type: "Blue", game: 1 },
  { pikminName: "White Pikmin", type: "White", game: 2 },
];

function renderCollection(pikminArray) {
  const display = document.getElementById('collection-display');
  
  // Best practice: Build the string first, then update innerHTML once
  let htmlString = ''; 

  pikminArray.forEach((item) => {
    htmlString += `
      <div class="item-card">
        <h3>${item.pikminName}</h3>
        <p>Game: ${item.game}</p>
        <p>Type: ${item.type}</p>
      </div>
    `;
  });
  
  display.innerHTML = htmlString;
}

// Call it on page load:
renderCollection(collection);

const btn = document.getElementById('add-btn');
btn.addEventListener('click', function() {
// Grab all the values from the input boxes
const pikminName = document.getElementById('input-name').value;
const type = document.getElementById('input-category').value;
const game = parseInt(document.getElementById('input-game').value);
// build a new object to go in collection
const newPik = { pikminName: pikminName, type: type, game: game }
// push the new object to collection
collection.push(newPik)
// re render collection
renderCollection(collection);
});