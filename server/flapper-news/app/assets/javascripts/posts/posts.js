angular.module('flapperNews')
.factory('posts', ['$http', function($http) {
	// service body
	var o = {};
	
	o.posts = [{
		title: 'My first post.',
		link:'http://allrecipes.co.uk', 
		upvotes: 0,
		comments: [] }
	];
	
	o.getAll = function() {
		return $http.get('/posts.json').success(function(data) {
			angular.copy(data, o.posts);
		});
	};
	
	return o;
}]);