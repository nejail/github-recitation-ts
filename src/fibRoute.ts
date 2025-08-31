// Endpoint for querying the fibonacci numbers

const fibonacci = require("./fib");

export default (req, res) => {
  const { num } = req.params;

  const fibN = fibonacci(parseInt(num));
  let result = ``;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  } else {
    result = `fibonacci(${num}) is ${fibN}`;
  }

  res.send(result);
};
