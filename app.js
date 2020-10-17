const app = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(toFizzBuzz(i));
  }
};

const toFizzBuzz = (num) => {
  if (i % 3 == 0 && i % 5 == 0) return "FizzBuzz";
  if (i % 3 == 0) return "Fizz";
  if (i % 5 == 0) return "Buzz";
  return num;
};

module.exports = app;
