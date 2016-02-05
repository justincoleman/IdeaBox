app.controller('HomeController', ['$scope', '$filter', 'suggestions', function($scope, $filter, suggestions) {

    // $scope.saved = localStorage.getItem('posts');
    // $scope.posts = suggestions.posts;
    // localStorage.setItem('posts', JSON.stringify($scope.posts));

    // Grab all of the posts from the model
    $scope.posts = suggestions.posts;

    $scope.addSuggestion = function() {

        // if input empty, don't submit
        if (!$scope.title || $scope.title === "") {
            return;
        }
        // push suggestion posts in suggestions.js
        $scope.$storage.posts.push({
            id: $scope.posts.length + 1,
            title: $scope.title,
            votes: 0,
            comments: []
        });

        // after submit, clear input
        $scope.title = "";
    };

    $scope.upVote = function(post) {
        post.votes += 1;

        // localStorage.setItem('posts', JSON.stringify(post.votes));
    };

    $scope.downVote = function(post) {
        post.votes -= 1;
    }
}]);