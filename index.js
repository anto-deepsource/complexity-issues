angular.module("myApp", []).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.trustedResourceUrlList(["https://hello.example.com/*"]);
});

angular.module("myApp", []).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.trustedResourceUrlList(["**://hello.example.com"]);
});
