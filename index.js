const vm = require('vm')
const jwt = require('jsonwebtoken')

for (const x in xs) { if (x) { /* code */ } } // no error

for (const x in xs) { console.log('x') } // error

for (const y in ys) { // error
  for (const x in xs) { // error
    console.log(x, y)
  }
}

const pattern = /[0-9][:alpha:]/ // posix in regex
app.get((req, res) => vm.runInThisContext(req.params.code)) // unsafe vm

const a = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }) // unsafe jwt

const arr = [{name: 'eslint'}];
arr.map(item => item.name); // unused return value

const aa = 1

foo()

function foo() {
  if (aa === 1) {
    return 1
  } else {
    return 2
  }
}
