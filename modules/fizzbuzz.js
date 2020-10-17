const toFizzBuzz = (num) => {
  if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";
  return num;
};

const isFizz = (num) => {
  return num % 3 == 0;
};

const isBuzz = (num) => {
  return num % 5 == 0;
};

module.exports = toFizzBuzz;
