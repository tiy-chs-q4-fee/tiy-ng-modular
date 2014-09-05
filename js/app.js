angular.module("tiy-ng-modules", ["tiy-ng-modules.controllers","tiy-ng-modules.services","ngRoute", "ngResource"])
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
      .when("/blog/newPost", {
        templateUrl: "views/posts/new.html",
        controller: "postsController"
      })
      .when("/posts", {
        templateUrl: "views/postsServer/list.html",
        controller: "postsServerController"
      })
      .when("/posts/new", {
        templateUrl: "views/postsServer/create.html",
        controller: "postsServerController"
      })
      .when("/posts/:id", {
        templateUrl: "views/postsServer/detail.html",
        controller: "postsServerController"
      })
      .when("/posts/:id/update", {
        templateUrl: "views/postsServer/update.html",
        controller: "postsServerController"
      })
      .when("/ghRepos", {
        templateUrl: "views/ghRepos.html",
        controller: "ghRepoCtrl"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });
angular.module("tiy-ng-modules.controllers", []);
angular.module("tiy-ng-modules.services", []);
