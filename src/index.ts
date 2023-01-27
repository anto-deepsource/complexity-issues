import express from 'express';
import { BrowserWindow, shell } from 'electron'

const mainWindow1 = new BrowserWindow({
  webPreferences: {
    webSecurity: false, // `webSecurity` should not be set to false
    allowRunningInsecureContent: true // `allowRunningInsecureContent` should not be set to true
  }
})

const app = express();
app.set('view engine', 'hbs');
app.post('/', (req, res) => {
    const options = req.body.params;
    res.render('home', options); // options can have the `layout` property
});

app.post('/', (req, res) => {
    const options = req.body.params;
    res.render('home', {
      name: options.name, // construct the object with only the required properties
      title: options.title
    });
});

app.post('/', (req, res) => {
    const url = req.body.url;
    shell.openExternal(url); // unsanitized content used with `openExternal`
});

const sanitize(url) => url

app.post('/', (req, res) => {
    const url = req.body.url;
    const safeUrl = sanitize(url)
    shell.openExternal(safeUrl); // sanitized content used with `openExternal`
});

const mainWindow2 = new BrowserWindow({
// alternatively: Do not set these properties in the options preferences object, as they're configured correctly by default.
    webPreferences: {
    webSecurity: true,
    allowRunningInsecureContent: false
    }
})
