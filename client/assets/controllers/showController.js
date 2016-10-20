app.controller('showController', ['$scope', 'friendFactory', '$routeParams', function($scope, friendFactory, params, $location) {
    $scope.friend = {};

    $scope.delete = function(id) {
        friendFactory.delete(id, function() {
            $location.url('/');
        });
    }

    friendFactory.show(params.id, function(data) {
        $scope.friend = data;
    });
}])
