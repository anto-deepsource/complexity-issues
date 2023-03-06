import { BrowserWindow } from "electron";

const mainWindow = new BrowserWindow({
  webPreferences: {
    contextIsolation: false, // `contextIsolation` should not be set to false
  },
});
