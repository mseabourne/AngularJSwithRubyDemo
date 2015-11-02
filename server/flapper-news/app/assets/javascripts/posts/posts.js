angular.module('flapperNews')
.factory('posts', ['$http', function($http) {
	// service body
	var o = {};
	
	o.posts = [];
	
	// o.posts = [{
	// 	title: 'My first post.',
	// 	link:'http://allrecipes.co.uk', 
	// 	upvotes: 0,
	// 	comments: [] }
	// ];
	
	o.getAll = function() {
		return $http.get('/posts.json').success(function(data) {
			angular.copy(data, o.posts);
		});
	};
	
	o.get = function() {
		return $http.get('/posts/' + id + '.json').then(function(res) {
			return res.data;
		});
	};
	
	o.create = function(post) {
		return $http.post('/posts.json', post).success(function(data) {
			o.posts.push(data);	
		});
	};
	
	o.upvote = function(post) {
		return $http.post('/posts/' + post.id + '/upvote.json')
			.success(function(data) {
				post.upvotes += 1;
			});
	};
	
	o.addComment = function(id, comment) {
		return $http.post('/posts/' + id + '/comments.json', comment);
	};

	o.upvoteComment = function(post, comment) {
		return $http.put('/posts/' + post.id + '/comments/'+ comment.id + '/upvote.json')
			.success(function(data) {
				comment.upvotes += 1;
			});
	};	
	
	return o;
}]);