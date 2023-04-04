var MarvelAPIKey = '56d680ad350989db0b995c28d74c5a40'
var MarvelPrivateAPIKey = '04b3f0728e999a4bde3264d4bc7453585ed435d7'
var GIFHYAPIKey = '43tnZfZ4jipkYDI9CLL5Vxf8VrJQ6daP'

var characterName = 'Thor';

const timestamp = new Date().getTime().toString();
console.log(Date)

var hash = md5(timestamp + MarvelPrivateAPIKey + MarvelAPIKey)
var marvelQueryURL = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&apikey=${MarvelAPIKey}&ts=${timestamp}&hash=${hash}`;

fetch(marvelQueryURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const results = data.data.results;
    let characterInfo = '';
    results.forEach(function (result) {
      characterInfo += `Name: ${result.name}\n`;
      characterInfo += `Description: ${result.description}\n`
      characterInfo += `thumbnail: ${result.thumbnail}\n`;

      document.querySelector('.description').textContent = result.description
      document.querySelector('.name').textContent = result.name
      document.querySelector('.thumbnail').innerHTML = `<img src="${result.thumbnail.path}.${result.thumbnail.extension}" alt="${result.name} thumbnail" />`
    });
    console.log(characterInfo);

    // Save the data to local storage
    localStorage.setItem('marvelData', JSON.stringify(data));
  })
  .catch(function (error) {
    console.error(error);
  });
  
  












document.getElementById("img1").addEventListener("click", function () {
    // API call goes here
    fetch("")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementById("description").innerHTML = data.Response;
      });
      console.log(img1)
  });
document.getElementById("img2").addEventListener("click", function () {
  // API call goes here
  fetch(" ")
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("img2").innerHTML = data.Response;
    });
});
document.getElementById("img3").addEventListener("click", function () {
    // API call goes here
    fetch(" ")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementById("img3").innerHTML = data.Response;
      });
  });
  document.getElementById("img4").addEventListener("click", function () {
    // API call goes here
    fetch(" ")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementById("img4").innerHTML = data.Response;
      });
  });
  document.getElementById("img5").addEventListener("click", function () {
    // API call goes here
    fetch(" ")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementById("img5").innerHTML = data.Response;
      });
  });
