angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo, $rootScope ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});
