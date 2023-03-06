const vm = require("vm");
const jwt = require("jsonwebtoken");

for (const x in xs) {
  if (x) {
    /* code */
  }
} // no error

for (const x in xs) {
  console.log("x");
} // error

for (const y in ys) {
  // error
  for (const x in xs) {
    // error
    console.log(x, y);
  }
}

const pattern = /[0-9][:alpha:]/; // posix in regex
app.get((req, res) => vm.runInThisContext(req.params.code)); // unsafe vm

const a = jwt.sign({ foo: "bar" }, key, { algorithm: "none" }); // unsafe jwt

const arr = [{ name: "eslint" }];
arr.map((item) => item.name); // unused return value

function App() {
  return 0;
}

function main() {
  return 1;
}

angular.module("myAppWithSceDisabledmyApp", []).config(function ($sceProvider) {
  $sceProvider.enabled(false);
});

angular.module("myAppWithSceDisabledmyApp", []).config(function ($sceProvider) {
  $sceProvider.enabled(true);
});

angulars
  .module("myAppWithSceDisabledmyApp", [])
  .config(function ($sceProvider) {
    $sceProvider.enabled(false);
  });

angular
  .modules("myAppWithSceDisabledmyApp", [])
  .config(function ($sceProvider) {
    $sceProvider.enabled(false);
  });

angular
  .module("myAppWithSceDisabledmyApp", [])
  .configs(function ($sceProvider) {
    $sceProvider.enabled(false);
  });

angular
  .module("myAppWithSceDisabledmyApp", [])
  .config(function ($sceProviders) {
    $sceProviders.enabled(false);
  });

angular
  .module("myAppWithSceDisabledmyApp", [])
  .config(function ($sceProviders) {});

const { BrowserWindow } = require("electron");
const mainWindow = new BrowserWindow({
  webPreferences: {
    contextIsolation: false, // `contextIsolation` should not be set to false
  },
});
