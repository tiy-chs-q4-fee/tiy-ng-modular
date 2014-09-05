angular.module("tiy-ng-modules.controllers", [])
.controller("homeController", function($scope, $location, postsService) {
  $scope.hello = "Hello Everyone!";
  $scope.notFound = "Sorry, wrong place";
  $scope.goToBlog = function () {
    $scope.hello = "this has changed.";
    // $location.path("/blog");
  };
  $scope.posts = postsService.getPosts();
});
