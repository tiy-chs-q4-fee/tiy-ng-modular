angular.module("tiy-ng-modules.services")
  .factory("githubService", function ($http) {

    var githubRepos = function() {

        var request = $http.get("https://api.github.com/users/calweb/repos").then(function (response) {
                      return response;
                    });


                    return request;
};
    return {
      githubRepos: githubRepos
    };
  });
