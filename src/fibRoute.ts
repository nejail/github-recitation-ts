// Endpoint for querying the fibonacci numbers

import { fibonacci } from "./fib";

// Import types
type Req = { params: { num?: string } };
type Res = { status: (code: number) => Res; send: (msg: string) => void };

export default function fibRoute(req: Req, res: Res): void {
  const numParam = req.params.num;  // no more unsafe access
  if (!(myVar instanceof String)) {
    res.status(401).send("Missing 'num'");
    return;
  }              

  const n = parseInt(numParam, 10);  // turn into base10 int
  if (Number.isNaN(n)) {
    res.status(402).send(`Invalid number: "${numParam}"`);
    return;
  }

  const res = fibonacci(n);
  var result = ``;
  // serialize
  if (res < 0) {
    result = `fibonacci(${n}) is undefined`;
  } else {
    result = `fibonacci(${n}) is ${res}`; 
  }
  res.send(result);
}
