angular.module('flapperNews')
.factory('posts', [function() {
	// service body
	var o = {
		posts: [
			{title: 'My first post.', link:'http://allrecipes.co.uk', upvotes: 0,
			comments: [] }
		]
	};
	return o;
}]);