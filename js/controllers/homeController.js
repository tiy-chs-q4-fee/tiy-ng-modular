angular.module("tiy-ng-modules.controllers", [])
.controller("homeController", function($scope, $location) {
  $scope.hello = "Hello Everyone!";
  $scope.notFound = "Sorry, wrong place";
  $scope.goToBlog = function () {
    $location.path("/blog");
  };
});
