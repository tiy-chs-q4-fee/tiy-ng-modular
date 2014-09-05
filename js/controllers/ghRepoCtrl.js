angular.module("tiy-ng-modules.controllers")
  .controller("ghRepoCtrl", function ($scope, $location,$http, githubService) {

    $scope.repos = githubService.githubRepos().then(function (data) {
      $scope.data = data;
    });

  });
