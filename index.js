const vm = require('vm')
const jwt = require('jsonwebtoken')
const tls = require('tls')

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

const arr = [{ name: 'eslint' }];
arr.map(item => item.name); // unused return value

const connection = tls.connect(443, 'www.abc.com', {
  secureProtocol: 'TLSv1_2_method',
  minVersion: 'TLSv1.2',
  maxVersion: 'TLSv1.3'
}, () => { })
