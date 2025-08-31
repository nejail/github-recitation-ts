// Endpoint for querying the fibonacci numbers

import { fibonacci } from "./fib";

// Import types
type Req = { params: { num?: string } };
type Res = { status: (code: number) => Res; send: (msg: string) => void };

export default function fibRoute(req: Req, res: Res): void {
  const numParam = req.params.num;  // no more unsafe access
  if (!(typeof numParam === "string" )) {
    res.status(401).send("Missing 'num'");
    return;
  }

  const n = parseInt(numParam, 10);  // turn into base10 int
  if (Number.isNaN(n)) {
    res.status(402).send(Invalid number: "${numParam}");
    return;
  }

  const retVal = fibonacci(n);
  let result = "";
  // serialize
  if (retVal < 0) {
    result = fibonacci(${n}) is undefined;
  } else {
    result = fibonacci(${n}) is ${retVal}; 
  }
  res.send(result);
}
