var MarvelAPIKey = "56d680ad350989db0b995c28d74c5a40";
var MarvelPrivateAPIKey = "04b3f0728e999a4bde3264d4bc7453585ed435d7";
var GIFHYAPIKey = "43tnZfZ4jipkYDI9CLL5Vxf8VrJQ6daP";

const searchBar = document.getElementById("SearchBar");
let characterName = "";

// Load past searches from localStorage
const pastSearchesList = document.getElementById("pastSearches");
const pastSearches = JSON.parse(localStorage.getItem("pastSearches")) || [];

function addPastSearch(query) {
  // Check if the search term already exists in past searches
  if (!pastSearches.includes(query)) {
    const item = document.createElement("li");
    item.textContent = query;
    item.addEventListener("click", () => performSearch(query));
    pastSearchesList.appendChild(item);
    pastSearches.push(query);
    // Save the updated past searches to localStorage
    localStorage.setItem("pastSearches", JSON.stringify(pastSearches));
  }
}

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    characterName = searchBar.value;
    console.log(`You searched for "${characterName}"`);
    performSearch(characterName);
  }
});
const label = document.querySelector('label[for="SearchBar"]');

searchBar.addEventListener("input", () => {
  if (searchBar.value.trim() === "") {
    label.classList.remove("hidden");
  } else {
    label.classList.add("hidden");
  }
});
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");

img1.addEventListener("click", () => performSearch("Hulk"));
img2.addEventListener("click", () => performSearch("Iron man"));
img3.addEventListener("click", () => performSearch("Thanos"));
img4.addEventListener("click", () => performSearch("Thor"));
img5.addEventListener("click", () => performSearch("Wolverine"));

function performSearch(characterName) {
  const timestamp = new Date().getTime().toString();
  console.log(Date);

  var hash = md5(timestamp + MarvelPrivateAPIKey + MarvelAPIKey);
  var marvelQueryURL = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&apikey=${MarvelAPIKey}&ts=${timestamp}&hash=${hash}`;

  fetch(marvelQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const results = data.data.results;
      let characterInfo = "";
      results.forEach(function (result) {
        characterInfo += `Name: ${result.name}\n`;
        characterInfo += `Description: ${result.description}\n`;
        characterInfo += `thumbnail: ${result.thumbnail}\n`;

        document.querySelector(".description").textContent = result.description;
        document.querySelector(".name").textContent = result.name;
        document.querySelector(
          ".thumbnail"
        ).innerHTML = `<img src="${result.thumbnail.path}.${result.thumbnail.extension}" alt="${result.name} thumbnail" />`;
      });
      console.log(characterInfo);

      // Save the data to local storage
      localStorage.setItem("marvelData", JSON.stringify(data));

      // Add the search term to the past searches list
      addPastSearch(characterName);
    })
    .catch(function (error) {
      console.error(error);
    });
  var giphyQueryURL = `https://api.giphy.com/v1/gifs/translate?api_key=${GIFHYAPIKey}&s=${characterName}`;
  fetch(giphyQueryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var gifUrl = data.data.images.original.webp;
      document.getElementById(
        "gif"
      ).innerHTML = `<img src="${gifUrl}" alt="${characterName} gif" />`;
    })
    .catch(function (error) {
      console.error(error);
    });
  
}
