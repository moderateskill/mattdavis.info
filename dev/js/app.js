var app = angular.module("my-app", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
    .when("/login", {
      templateUrl: "js/views/login.html"
    })
    .when("/query", {
      template: "<p>Query Placeholder</p>"
    })
    .when("/inventory", {
      template: "<p>Inventory Placeholder</p>"
    })
    .when("/pos", {
      template: "<p>Point of Sale Placeholder</p>"
    })
    .when("/analytics", {
      template: "<p>Analytics Placeholder</p>"
    })
    .when("/permissions", {
      template: "<p>Permissions Placeholder</p>"
    })
    .when("/", {
      template: "<p>Nothing has been selected</p>"
    });
});
