function printRightToLeft(n) {
  console.log(n % 10);
  if (n >= 10) {
    printRightToLeft(Math.floor(n / 10));
  }
}

printRightToLeft(8218);