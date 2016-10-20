app.controller('editController', ['$scope', 'friendFactory', '$routeParams', '$location', function($scope, friendFactory, params, $location) {
    $scope.friend = {};

    $scope.update = function() {
        friendFactory.update($scope.friend, function(data) {
            $location.url(`/show/${data._id}`);
        });
    }
    $scope.delete = function(id) {
        friendFactory.delete(id, function() {
            $location.url('/');
        });
    }

    friendFactory.show(params.id, function(data) {
        $scope.friend = data;
    });
}]);
