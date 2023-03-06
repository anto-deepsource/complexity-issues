import { BrowserWindow } from "electron";

const mainWindow = new BrowserWindow({
  webPreferences: {
    contextIsolation: false // `contextIsolation` should nott be set to false
  }
})
