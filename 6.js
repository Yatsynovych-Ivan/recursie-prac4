function printLeftToRight(n) {
  if (n >= 10) {
    printLeftToRight(Math.floor(n / 10));
  }
  console.log(n % 10);
}

printLeftToRight(314);