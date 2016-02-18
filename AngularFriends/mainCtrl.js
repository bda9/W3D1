var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope, $http) {
      $http.get('friend-data.json').then(function(data) {
            $scope.friends = data.data;
          });
        //$scope.sortField = 'friend.name';
      $scope.reverse = true;
});
