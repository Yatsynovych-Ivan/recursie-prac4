function printAtoB(a, b) {
  console.log(a);
  if (a === b) return;
  
  if (a < b) {
    printAtoB(a + 1, b);
  } else {
    printAtoB(a - 1, b);
  }
}


printAtoB(1, 100)
