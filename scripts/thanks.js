window.onload = function(){
  var myButton = document.getElementById('thanksbutton');
  myButton.addEventListener("click", handleClick);
  setInterval(spawnImage, 1000);
}

function handleClick() {
  spawnImage();
}

function spawnImage() {
  var coords = getRandomCoordsIn(document.body);
  var degrees = Math.random() * 360;

  var myImg = document.createElement('img');
  myImg.alt = 'thanks';
  myImg.src = './images/thanks/thanks.png';
  myImg.width = 400;

  coords[0] = coords[0] - myImg.height * .25;
  coords[1] = coords[1] - myImg.width * .25;

  myImg.style.top = coords[0] + 'px';
  myImg.style.left = coords[1] + 'px';
  myImg.style.zIndex = "-999";
  myImg.style.filter = 'hue-rotate(' + degrees + 'deg)';

  document.body.appendChild(myImg);
}

function getRandomCoordsIn(element) {
  var max_height = element.offsetHeight;
  var max_width = element.offsetWidth;

  return [
    Math.floor(Math.random() * max_height),
    Math.floor(Math.random() * max_width)
  ];
}

