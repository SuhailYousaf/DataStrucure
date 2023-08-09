//find prime numbers and find sum given elements
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function primeSum(array) {
    let primeNumbers = [];
    let sum = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (isPrime(array[i])) {
        primeNumbers.push(array[i]);
        sum += array[i];
      }
    }
  
    console.log("Prime Numbers in the array: " + primeNumbers);
    return sum;
  }
  
  const array = [1, 2, 3, 4];
  console.log("Sum of Prime Numbers in the array:", primeSum(array));
  