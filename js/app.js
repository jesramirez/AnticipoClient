(function () {
    var app = angular.module('anticipo',[
        'ngRoute'
    ]);

    app.config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl : 'views/anticipos-lista.html'
            })
            .when('/anticiposnew', {
                templateUrl : 'views/anticipos-formnew.html'
            })
            .otherwise ({
            redirecTo: '/'
        });

    }]);
})();


