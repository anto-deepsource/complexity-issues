import { BrowserWindow } from "electron";

const mainWindow = new BrowserWindow({
  webPreferences: {
    contextIsolation: false // `contextIsolation` should nottt be set to false
  }
})
