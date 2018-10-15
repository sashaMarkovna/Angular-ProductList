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
        }
    };
});

app.directive('productDescr', function () {
    return {
        link: function (scope, element, attrs) {

            let imgTemplate = angular.element("<img>"),
                linkTemplate = angular.element("<a>Product Link...</a>"),
                arrTemplate = angular.element("<p></p>");

            scope.checkKeyValue = function (key, value) {

                if (!value) {
                    return "no information"

                } else if (key === 'link') {
                    linkTemplate.attr('href', value);
                    element.append(linkTemplate);

                } else if (key === 'img') {
                    imgTemplate.attr('src', value);
                    imgTemplate.addClass('item-img');
                    element.append(imgTemplate);

                } else if (Array.isArray(value)) {
                    let str = '';
                    value.forEach(elem => { if (elem) { str += elem + " " } });

                    if (!str) { return 'no information' }

                    str = str.slice(0, length - 1).split(' ').join(" * ");
                    arrTemplate.text(str);
                    element.append(arrTemplate);

                } else {
                    return value;
                }
            };
        }
    }    
});


