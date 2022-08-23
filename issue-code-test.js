import vm from 'vm'
import b from './b'
import jwt from 'jsonwebtoken'
const tls = require('tls')

app.get((req, res) => vm.runInThisContext(req.params.code)) // unsafe vm
const a = jwt.sign({ foo: 'bar' }, key, { algorithm: 'none' }) // unsafe jwt

let foo = {}
let bar = foo?.foobar

const cp = require("child_process")
const { exec } = require("child_process")

const proc = "foobar"
cp.exec(proc) // unsafe

cp.exec("ls") // safe

cp.execFile(proc) // unsafe

exec("fubar") // safe
exec("./" + proc)  // unsafe

export async function f(x) {
  return async function g() {
    return async function h() {
      return x
    }
  }
}

export async function f2(xs) {
  const ys = []
  for await (const x of xs) {
    ys.push(x)
  }
  return ys
}

const connection = tls.connect(443, 'www.abc.com', {
  secureProtocol: 'TLSv1_method', // insecure version
  minVersion: 'TLSv1.1', // insecure version
  maxVersion: 'TLSv1.2'
}, () => { })

export default 2
