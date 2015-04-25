(function () {
    'use strict';


    angular
        .module('lsm')
        .factory('services',services);

    services.$inject = ['$http', '$q'];

    function services($http,$q) {

        var service = {
            loadJSON: loadJSON
        }

        function loadJSON(url){
            var deferred = $q.defer();
            $http.get(url)
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function (data, status, headers, config) {
                    deferred.reject(status);
                });

            return deferred.promise;
        }

        return service;

    }
})();