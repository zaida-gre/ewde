//collect data structure
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
renderStats();


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
renderStats();
});


//search
//get search bar
const userInput = document.getElementById('search-input');
//add event listener on search bar
userInput.addEventListener('keyup', function() {
  let lowerCaseInput = userInput.value.toLowerCase();
//whenever they type: find what they type
  const filtered = collection.filter(pik => {
    return pik.pikminName.toLowerCase().includes(lowerCaseInput);
  });
//render what we have found
  renderCollection(filtered)
})


function renderStats() {
//amount
const totalPik = collection.length;

const common = getMostCommon();

  //stats section
const stats = document.getElementById('stats-display');

// clear out stats
stats.innerHTML = `
        <p>Total Pikmin: ${totalPik}</p>
        <p>Most Common Game: ${getMostCommon()}</p>
    `;

}


//common game
function getMostCommon() {

const counts = {};

let mostCommon = null;
let maxCount = 0;

for (const pik of collection) {
  const val = pik.game; 
  counts[val] = (counts[val] || 0) + 1;

  console.log(counts);

  if (counts[val] > maxCount) {
    maxCount = counts[val];
    mostCommon = val;
  }
}

return mostCommon
}