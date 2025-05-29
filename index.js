const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
let heading1 = $(".heading1");

const image1 = $(".img1");
if (randomNumber1 === 1) {
  image1.attr("src", "./images/dice1.png");
} else if (randomNumber1 === 2) {
  image1.attr("src", "./images/dice2.png");
} else if (randomNumber1 === 3) {
  image1.attr("src", "./images/dice3.png");
} else if (randomNumber1 === 4) {
  image1.attr("src", "./images/dice4.png");
} else if (randomNumber1 === 5) {
  image1.attr("src", "./images/dice5.png");
} else if (randomNumber1 === 6) {
  image1.attr("src", "./images/dice6.png");
}

const image2 = $(".img2");
if (randomNumber2 === 1) {
  image2.attr("src", "./images/dice1.png");
} else if (randomNumber2 === 2) {
  image2.attr("src", "./images/dice2.png");
} else if (randomNumber2 === 3) {
  image2.attr("src", "./images/dice3.png");
} else if (randomNumber2 === 4) {
  image2.attr("src", "./images/dice4.png");
} else if (randomNumber2 === 5) {
  image2.attr("src", "./images/dice5.png");
} else if (randomNumber2 === 6) {
  image2.attr("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  heading1.text("Player 1 Wins");
} else if (randomNumber1 < randomNumber2) {
  heading1.text("Player 2 Wins");
} else if (randomNumber1 === randomNumber2) {
  heading1.text("Draw");
}
