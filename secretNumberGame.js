function secretNumberGame() {
  // загадываем случайное число от 1 до 100
  const secretNumber = Math.floor(Math.random() * 100 + 1);
  let maxGuess = 100;
  let minGuess = 1;
  let guess = 50;

  while (1) {
    console.log(`Компьютер 2: Пробую число ${guess}.`);

    if (guess > secretNumber) {
      console.log("Компьютер 1: Меньше.\n");
      maxGuess = guess;
      guess = Math.floor(maxGuess - (maxGuess - minGuess) / 2);
    } else if (guess < secretNumber) {
      console.log("Компьютер 1: Больше.\n");
      minGuess = guess;
      guess = Math.floor(minGuess + (maxGuess - minGuess) / 2);
    } else {
      console.log("Компьютер 1: Угадал!");
      break;
    }
  }
}

secretNumberGame();
