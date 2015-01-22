(function () {
    var app = angular.module('anticipo',[
        'ngRoute',
        'anticipo.controllers',
        'anticipo.services'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'views/anticipos-lista.html'
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
    }]);
})();


