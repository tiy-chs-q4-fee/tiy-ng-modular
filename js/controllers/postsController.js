angular.module("tiy-ng-modules.controllers")
  
  .controller("postsController", function ($scope) {
    $scope.posts = [
      {title: "hello world", content: "this is content"},
      {title: "hello world 1", content: "this is content"},
      {title: "hello world 2", content: "this is content"},
      {title: "hello world 3", content: "this is content"},
    ];
  });
