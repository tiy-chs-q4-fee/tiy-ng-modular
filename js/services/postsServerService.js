angular.module("tiy-ng-modules.services")
  .factory("postsServerService", function ($resource) {
    return $resource("http://tiy-fee-rest.herokuapp.com/collections/crud-demo/:id",
    {
      id: "@_id"
    },
    {
      get:    { method: "GET", isArray: true },
      create: { method: "POST" },
      update: { method: "PUT" },
      delete: { method: "DELETE" }
    });
  });
