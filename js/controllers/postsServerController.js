angular.module("tiy-ng-modules.controllers")
  .controller("postsServerController", function ($scope, $location, $routeParams, postsServerService) {

    $scope.posts = postsServerService.get();
    $scope.post = postsServerService.get({id: $routeParams.id});

    $scope.create = function (newPost) {
      postsServerService.create(newPost);
      $location.path("/posts");
    };

    $scope.update = function (id) {
      postsServerService.update(id);
      $location.path("/posts");
    };

    $scope.delete = function (id) {
      postsServerService.delete(id);
    };

  });
