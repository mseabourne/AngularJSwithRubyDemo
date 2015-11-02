angular.module('flapperNews')
.controller('PostsCtrl', [
	'$scope',
	'posts',
	'post',
	function($scope, posts, post) {
		$scope.post = post;
		
		$scope.addComment = function() {
			if ($scope.body === '') { return; }
			
			posts.addComment(post.id, {
				body: $scope.body,
				author: 'user',
				upvotes: 0
			}).success(function(comment) {
				$scope.post.comments.push(comment);
			});
			// $scope.post.comments.push({
			// 	body: $scope.body,
			// 	author: 'user',
			// 	upvotes: 0
			// });
			
			$scope.body = '';
		};
		
		$scope.incrementUpvotes = function(comment) {
			// comment.upvotes += 1;
			posts.upvoteComment(post, comment);	
		};
	}
]);