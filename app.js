var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '../partials/home.html'
        })
        .otherwise({
            redirectTo: '../partials/home.html'
        });
});