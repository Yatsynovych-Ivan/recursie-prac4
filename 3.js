function isPowerOfTwo(n) {
  if (n === 1) return "YES";
  if (n <= 0 || n % 2 !== 0) return "NO";
  
  return isPowerOfTwo(n / 2);
}

console.log(isPowerOfTwo(55511));
console.log(isPowerOfTwo(64));