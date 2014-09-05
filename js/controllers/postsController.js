angular.module("tiy-ng-modules.controllers")

  .controller("postsController", function ($scope, $location, postsService) {
    $scope.posts = postsService.getPosts();
    $scope.newPost = function (post) {
      postsService.createPost(post);

      $location.path("/blog");
    };
    $scope.delete = function (idx) {
      postsService.deletePost(idx);
    };

  });
