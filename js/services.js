/**
 * Created by JR on 21/01/2015.
 */
(function () {

     var app =angular.module('anticipo.services', []);

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