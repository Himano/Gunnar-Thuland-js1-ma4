const url = "https://api.rawg.io/api/games/4200";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    createGameDetails(json);
  })
  .catch(function (error) {
    console.log(error);
  });

function createGameDetails(json) {
  const GameName = document.querySelector("h1");
  GameName.innerHTML = json.name;

  const imgUrl = document.querySelector(".image");
  imgUrl.style.backgroundImage = `url("${json.background_image}")`;

  const description = document.querySelector(".description");
  description.innerHTML = json.description;
}
