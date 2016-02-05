app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {

    $scope.post = suggestions.posts[$routeParams.id];
    // $scope.post = suggestions.posts.filter(function(a) {
    //   return (a.id == $routeParams.id);
    // })[0];

    $scope.addComment = function() {

        // if input empty, don't submit
        if (!$scope.body || $scope.body === "") {
            return;
        }

        // push suggestion posts in suggestions.js
        $scope.post.comments.push({
            body: $scope.body,
            upvotes: 0
        });

        // after submit, clear input
        $scope.body = "";
    };

    $scope.upVote = function(post) {
        post.votes += 1;
    };

    $scope.downVote = function(post) {
        post.votes -= 1;
    }

    $scope.upVoteComment = function(comment) {
        comment.upvotes += 1;
    };
}]);