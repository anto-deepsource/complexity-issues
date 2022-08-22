import vm from 'vm'
import b from './b'
import jwt from 'jsonwebtoken'

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


export default 2
