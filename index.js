const vm = require("vm");
const jwt = require("jsonwebtoken");

for (const x in xs) {
  if (x) {
    /* code */
  }
} // no error

for (const x in xs) {
  console.log("x");
} // error

for (const y in ys) {
  // error
  for (const x in xs) {
    // error
    console.log(x, y);
  }
}

const pattern = /[0-9][:alpha:]/; // posix in regex
app.get((req, res) => vm.runInThisContext(req.params.code)); // unsafe vm

const a = jwt.sign({ foo: "bar" }, key, { algorithm: "none" }); // unsafe jwt

const arr = [{ name: "eslint" }];
arr.map((item) => item.name); // unused return value

function App() {
  return 0;
}

function main() {
  return 1;
}

foo && foo.bar;
foo && foo();
foo && foo.bar();
foo.bar && foo.bar.baz;
f(x && x[0]);
foo.bar.baz && foo.bar.baz.biz.nez;
foo["some string"] && foo["some string"].bar;
this.bar && this.bar.baz;
foo && foo(bar, baz, bam);

if (config && config.onUpdate) {
}
