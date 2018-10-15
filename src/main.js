let app = angular.module('app', []);

app.controller('httpController', function ($scope, $http) {

    $http.get('http://demo1926686.mockable.io/test')
        .success(function (result) {
            $scope.products = result.products;
        })
        .error(function (result) {
            console.log('error');
        });
});


app.directive('productCard', function () {
    return {
        link: function (scope, element, attrs) {
            scope.transformKeys = function (key) {
                return key.charAt(0).toUpperCase().concat(key.slice(1).split('_').join(" "));
            };
            scope.ifVal = function (val) {
                if(!val) { return 'No info'}
                return val;
            }
        }
    };
});



