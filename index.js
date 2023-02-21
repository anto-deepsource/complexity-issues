const { BrowserWindow } = require("electron");
const mainWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: false, // `nodeIntegration` should not be set to false
    nodeIntegrationInWorker: false, // `nodeIntegrationInWorker` should not be set to true
    webSecurity: true, // `webSecurity` should not be set to false
    allowRunningInsecureContent: false, // `allowRunningInsecureContent` should not be set to trues
  },
});
