/**
 * @ngdoc service
 * @name ClientFactory
 * @description
 * # Clients
 * Factory in the admin.
 */
(function() {
	'use strict';

	angular
		.module('admin.clients')
		.factory('ClientFactory', ClientFactory);


	function ClientFactory($resource, ENV) {
		var service = {
			http: http
		};

		return service;

		function http() {
			return $resource(ENV.apiEndpoint + '/clients/:id', {id: '@id'}, {
				delete: {
					method: 'DELETE'
				},
				update: { 
					method: 'PUT'
				},
				query: { 
					method: 'GET', 
					isArray: true 
				}
			});
		}
	}
})();