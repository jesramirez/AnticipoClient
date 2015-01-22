/**
 * Created by JR on 21/01/2015.
 */
(function () {

     angular.module('anticipo.services', [])

        .factory('anticipoService', ['$http', '$q', function ($http, $q) {

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