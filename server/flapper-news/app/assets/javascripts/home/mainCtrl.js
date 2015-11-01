angular.module('flapperNews')
.controller('MainCtrl2', [
	'$scope',
	'posts',
	function($scope, posts) {
		$scope.appTitleText = 'Hello world!';
		$scope.addNewPostText = 'Add a new post';
		$scope.postSubmitText = 'Post';
		$scope.posts = posts.posts;
		
		$scope.addPost = function() {
			if (!$scope.title || $scope.title ==='') {
				$scope.errormessage = "A title must be entered.";
			} else {
				$scope.posts.push({
					title: $scope.title, 
					link: $scope.link,
					upvotes: 0,
					comments: [
						{author: 'Joe', body: 'Cool post bro!', upvotes: 0},
						{author: 'Bim', body: 'Wow. You are really killing it today', upvotes:0}
					]});	
				$scope.title = "";
				$scope.link = "";
			}
		};
		
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;	
		};
	}
]);