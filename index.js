angular.module("myApp", []).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.trustedResourceUrlList(["https://hello.example.com/*"]);
});

angular.module("myApp", []).config(function ($sceDelegateProvider) {
  $sceDelegateProvider.trustedResourceUrlList(["**://hello.example.com"]);
});

for (i = 0; i < j; i++) {
  console.log(i);
}
