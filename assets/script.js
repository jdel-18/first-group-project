


document.getElementById("img1").addEventListener("click", function () {
    // API call goes here
    fetch(" ")
      .then((Response) => Response.json())
      .then((data) => {
        document.getElementById("img1").innerHTML = data.Response;
      });
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
