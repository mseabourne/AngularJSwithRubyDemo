angular.module('flapperNews', [])
.controller('MainCtrl', [
	'$scope',
	function($scope) {
		$scope.test = 'Hello world!';
		
		$scope.posts = [
			{title:'post 1', upvotes: 50},
			{title:'post 2', upvotes: 20},
			{title:'post 3', upvotes: 150},
			{title:'post 4', upvotes: 90},
			{title:'post 5', upvotes: 40}
		];
		
		$scope.addPost = function() {
			$scope.posts.push({title: 'A new post', upvotes: 0});	
			console.debug("foo");
		};
	}
]);