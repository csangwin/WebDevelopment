let button = document.getElementById("clickme");

function changeColor() {
  let body = document.getElementById("random-background");
  let redValue = Math.floor(Math.random() * 255);
  let greenValue = Math.floor(Math.random() * 255);
  let blueValue = Math.floor(Math.random() * 255);

  body.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}

button.onclick = () => {
  changeColor();
}
