(function(){
    var app = angular.module('anticipo',['ngRoute']);

    app.config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'views/anticipos-lista.html',
                controller: 'AnticipoController'
            })
            .when('/anticiposnew', {
                templateUrl : 'views/anticipos-formnew.html'
            })
            .when('/anticipos/:id', {
                templateUrl : 'views/anticipos-update.html'
            })
            .otherwise ({
            redirecTo: '/'
        });
    });
    app.controller('AnticipoController', ['$scope', 'anticipoService', function ($scope, anticipoService) {
        anticipoService.all().then(function (data) {
            $scope.anticipos = data;
        });

    }])

    app.factory('anticipoService', ['$http', '$q', function ($http, $q) {

        function all() {
            var deferred = $q.defer();

            $http.get('/anticipos.json')
                .success(function (data) {
                    deferred.resolve(data);
                });

            return deferred.promise;
        }
        return {
            all: all
        };

    }]);


})();








