window.onload = () => {
  let cards = ["&#9829;", "&#9827;", "&#9830;", "&#9824;"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let colors = ["text-danger", "text-dark"];

  function displayCards() {
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let changeColor = colors[Math.floor(Math.random() * colors.length)];
    let showNumber = singleNumber;
    let showCard = singleCard;
    let showColor = changeColor;
    const number = document.getElementById("number");
    number.innerHTML = showNumber;
    const iconTop = document.getElementById("iconTop");
    iconTop.innerHTML = showCard;
    iconTop.classList.add(showColor);
    const iconButtom = document.getElementById("iconButtom");
    iconButtom.classList.add(showColor);
    iconButtom.innerHTML = showCard;
  }
  displayCards();
  const button = document.querySelector("button");
  button.addEventListener("click", () => displayCards());
};
//al presionar boton no cambia los colores, como conseguirlo?