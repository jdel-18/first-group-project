var MarvelAPIKey = '56d680ad350989db0b995c28d74c5a40'
var GIFHYAPIKey = '43tnZfZ4jipkYDI9CLL5Vxf8VrJQ6daP'


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
