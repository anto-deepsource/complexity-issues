import { execSync } from 'child_process'
app.get((req, res) => {
  execSync('cat ' + some + req.body)
})
