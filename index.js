const { BrowserWindow } = require("electron");
const mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true, // `nodeIntegration` should not be set to false
    nodeIntegrationInWorker: true, // `nodeIntegrationInWorker` should not be set to true
    webSecurity: false, // `webSecurity` should not be set to false
    allowRunningInsecureContent: true, // `allowRunningInsecureContent` should not be set to true
  },
});
