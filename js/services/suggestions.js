app.factory('suggestions', [function() {
    var demoSuggestions = {
        posts: [
            {
                id: 0,
                title: 'Retrofit water fountain with Gatorade',
                votes: 7,
                comments: [
                    {
                        body: "Great idea!",
                        upvotes: 4
                    },
                    {
                        body: "Yes!",
                        upvotes: 1
                    }
                ],
            },
            {
                id: 1,
                title: 'Free pizza at club meetings',
                votes: 15,
                comments: [
                    {
                        body: "My dude!",
                        upvotes: 1000
                    }
                ],
            },
            {
                id: 2,
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                votes: 3,
                comments: [
                    {
                        body: "Please no. Please please no!",
                        upvotes: 0
                    }
                ],
            },
            {
                id: 3,
                title: 'End all club emails with Laffy Taffy jokes',
                votes: 9,
                comments: [
                    {
                        body: "I literally can't even with this guy.",
                        upvotes: 7
                    },
                    {
                        body: "But can you even?",
                        upvotes: 1
                    },
                    {
                        body: "Guys, please be serious!",
                        upvotes: 0
                    }
                ],
            }
        ]
    };

    return demoSuggestions;
}]);