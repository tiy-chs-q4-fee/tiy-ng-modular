angular.module("tiy-ng-modules", ["tiy-ng-modules.controllers","ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/blog", {
        templateUrl: "views/posts/list.html",
        controller: "postsController"
      })
      .when("/notFound",
      {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });
angular.module("tiy-ng-modules.controllers", []);
angular.module("tiy-ng-modules.services", []);
