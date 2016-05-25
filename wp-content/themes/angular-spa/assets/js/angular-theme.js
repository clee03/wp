var wpApp = new angular.module( 'wpAngularTheme', ['ui.router', 'ngResource'] );

wpApp.factory( 'Posts', function( $resource ) {
	return $resource( appInfo.api_url + 'posts/:ID', {
		ID: '@id'
	})
});


function switchTopNav () {
	if (jQuery('#top-nav').hasClass("hidden")) {
		jQuery('#top-nav').removeClass("hidden");
	}
	if (!jQuery('#sidebar').hasClass("hidden")) {
		jQuery('#sidebar').addClass("hidden");
	}
}

function switchSidebar () {
	if (jQuery('#sidebar').hasClass("hidden")) {
		jQuery('#sidebar').removeClass("hidden");
	}
	if (!jQuery('#top-nav').hasClass("hidden")) {
		jQuery('#top-nav').addClass("hidden");
	}
}

wpApp.controller( 'ListCtrl', ['$scope', 'Posts', function( $scope, Posts ) {
	console.log('ListCtrl');
	// $scope.page_title = 'Blog Listing Page';

	switchTopNav();

	Posts.query(function( res ) {
		$scope.posts = res;
	});

}]);

wpApp.controller( 'DetailCtrl', ['$scope', '$stateParams', 'Posts', function( $scope, $stateParams, Posts ) {
	console.log( $stateParams );
	switchTopNav();

	Posts.get( { ID: $stateParams.id}, function(res){
		$scope.post = res;
	})
}])

wpApp.controller( 'ResumeCtrl', ['$scope', 'Posts', function( $scope, Posts ) {

	switchTopNav();

	Posts.query(function( res ) {
		// jQuery.each(res, function (idx, val) {
		// 	var cat = res[idx].categories
		// 	jQuery.each(cat, function (idx, val) {
		// 		if (val === 3) console.log(val);
		// 	})
		// })
		$scope.posts = res;
	});
}])


	wpApp.controller( 'AboutCtrl', ['$scope', 'Posts', function( $scope, Posts ) {
		switchSidebar();

		// jQuery('#sidebar').addClass("hidden");
		// jQuery('#top-nav').removeClass("hidden");
		//
		// Posts.query(function( res ) {
		// 	$scope.posts = res;
		// });
	}])


		wpApp.controller( 'DoBackCtrl', ['$scope', function( $scope ) {
			window.history.back();
		}])


wpApp.config( function( $stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state( 'home', {
			url: '/',
			controller: 'PageCtrl',
			templateUrl: appInfo.template_directory + 'templates/paginate.html'
		})
		.state( 'list', {
			url: '/list',
			controller: 'ListCtrl',
			templateUrl: appInfo.template_directory + 'templates/project-list.html'
		})
		.state( 'detail', {
			url: '/posts/:id',
			controller: 'DetailCtrl',
			templateUrl: appInfo.template_directory + 'templates/detail.html'
		})
		.state( 'resume', {
			url: '/resume',
			controller: 'ResumeCtrl',
			templateUrl: appInfo.template_directory + 'templates/resume.html'
		})
		.state( 'about', {
			url: '/about',
			controller: 'AboutCtrl',
			templateUrl: appInfo.template_directory + 'templates/about.html'
		})
		.state( 'goBack', {
			controller: 'DoBackCtrl',
		})
});

wpApp.filter( 'to_trusted', ['$sce', function( $sce ){
	return function( text ) {
		return $sce.trustAsHtml( text );
	}
}]);



wpApp.controller('PageCtrl', ['$scope', 'Posts', function( $scope, Posts ) {
	console.log('PageCtrl');
	switchSidebar();

	Posts.query(function( res ) {
		$scope.posts = res;
	});

    $scope.currentPage = 0;
    $scope.pageSize = 1;
    // $scope.data = [];
    $scope.numberOfPages = function(){
        return Math.ceil($scope.posts.length/$scope.pageSize);
    }
    // for (var i=0; i<45; i++) {
    //     $scope.data.push("Item "+i);
    // }
}]);

//We already have a limitTo filter built-in to angular,
//let's make a startFrom filter
wpApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});


wpApp.controller( 'NavCtrl', ['$scope', '$stateParams', 'Posts', function( $scope, $stateParams, Posts ) {

	console.log( $stateParams );
	// $scope.resume = function () {
	// 	console.log( "navctrl.resume ()" );
	// 	Posts.get( { ID: $stateParams.id}, function(res){
	// 		$scope.post = res;
	// 	})
	// }

  // $scope.projects = function() {
	// 	console.log('hello click');
	//
	//
	// 	Posts.query(function( res ) {
	// 			$scope.posts = res;
	// 		});
	//
  // };

//
// wpApp.controller('TodoController', function($scope) {
//    $scope.filteredTodos = []
//   ,$scope.currentPage = 1
//   ,$scope.numPerPage = 10
//   ,$scope.maxSize = 5;
//
//   $scope.makeTodos = function() {
//     $scope.todos = [];
//     for (i=1;i<=1000;i++) {
//       $scope.todos.push({ text:'todo '+i, done:false});
//     }
//   };
//   $scope.makeTodos();
//
//   $scope.$watch('currentPage + numPerPage', function() {
//     var begin = (($scope.currentPage - 1) * $scope.numPerPage)
//     , end = begin + $scope.numPerPage;
//
//     $scope.filteredTodos = $scope.todos.slice(begin, end);
//   });
// });


}])
