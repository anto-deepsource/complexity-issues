import { writeFile, writeFileSync } from 'fs'

writeFile('/tmp', 'data', (err) => {})

writeFileSync('/var/tmp/some', data)
