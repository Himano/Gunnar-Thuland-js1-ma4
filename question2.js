const Url = "https://api.rawg.io/api/games";

fetch(Url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createGames(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function createGames(json) {
  const results = json.results;
  const resultsContainer = document.querySelector(".results");
  let html = "";

  results.forEach(function (result) {
    html += `<div class="game">
                        <h2>${result.name}</h2>
                        <img src="${result.background_image}" alt="${result.name}">
                    </div>`;
  });

  resultsContainer.innerHTML = html;
}
