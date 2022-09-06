import helmet, { hsts } from 'helmet'
import exp, { static as stat } from 'express'
import lib from 'libxmljs';

const app = exp()
app.use(hsts({ includeSubdomains: false })) // 1002 - 

app.use(helmet.dnsPrefetchControl({ allow: true })) // 1003

express.use(stat('public', { dotfiles: 'allow' })) // d020 -

const h = require('helmet'); h({ noSniff: false }) // 1001 -

lib.parseXmlString('', { noent: true }) // d022

Buffer([1, 2, 3]) // d026
new Buffer([1, 2, 3])
new Buffer(10)

helmet.contentSecurityPolicy({ directives: { frameAncestors: 'none' } }) // d024
const { contentSecurityPolicy } = require('helmet')
const foo = 1
contentSecurityPolicy({ directives: { frameAncestors: 'none', foo } }) // d024
