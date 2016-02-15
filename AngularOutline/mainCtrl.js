var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {

  $scope.addName = function() {
  $scope.friends.push({name:$scope.tagName, status:$scope.tagStatus});
  };

  $scope.friends = [{
    name: 'dave',
    status: 'hot'
  }, {
    name: 'keith',
    status: 'lame'
  }, {
    name: 'toby',
    status: 'boring'
  }, {
    name: 'sue',
    status: 'not a boy'
  }];
});
