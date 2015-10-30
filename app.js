angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello world!';
		
		$scope.posts = [
			{title:'post 1', link:"http://allrecipes.co.uk", upvotes: 50},
			{title:'post 2', upvotes: 20},
			{title:'post 3', upvotes: 150},
			{title:'post 4', upvotes: 90},
			{title:'post 5', upvotes: 40}
		];
		
		$scope.addPost = function() {
			if (!$scope.title || $scope.title ==='') {
				$scope.errormessage = "A title must be entered.";
			} else {
				$scope.posts.push({
					title: $scope.title, 
					link: $scope.link,
					upvotes: 0});	
				$scope.title = "";
				$scope.link = "";
			}
		};
		
		$scope.incrementUpvotes = function(post) {
			post.upvotes += 1;	
		};
	}
]);