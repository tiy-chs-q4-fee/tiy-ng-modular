angular.module("tiy-ng-modules.services")
  .factory("postsService", function () {
    var posts = [

      {title: "hello world 1", content: "this is content"},
      {title: "hello world 2", content: "this is content"},
      {title: "hello world 3", content: "this is content"},
    ];
    var getPosts = function () {
        return posts;
    };

    var createPost = function (newPost) {
      posts.push(newPost);
    };

    var deletePost = function (idx) {
      posts.splice(idx, 1);
    };

    // return methods
    return {
      getPosts: getPosts,
      createPost: createPost,
      deletePost: deletePost
    };
  });
