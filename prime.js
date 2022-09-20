
function checkPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num %  == 0) {
      return false;
    }
  }
  return true;
}
console.log(checkPrime(0));