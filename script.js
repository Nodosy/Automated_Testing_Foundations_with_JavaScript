// In a try catch construction, wrap the code: console.log (a), let a = 3. And display an error - ‘let must be declared’ before use. When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch {
  console.error("let must be declared");
}

function devider(x, y) {
  if (y === 0) {
    throw new Error("cannot be divided by zero");
  }
  console.log(x / y);
}
devider(1, 0);
