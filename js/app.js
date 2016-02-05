var app = angular.module('SuggestionBox', ['ngRoute', 'ngStorage']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: 'partials/home.html'
        })
        .when('/suggestion/:id', {
            controller: 'SuggestionController',
            templateUrl: 'partials/suggestion.html'
        })
        .otherwise({
            redirectTo: 'partials/home.html'
        });
});