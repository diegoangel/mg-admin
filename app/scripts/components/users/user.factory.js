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
		.module('admin.users')
		.factory('UserFactory', UserFactory);

	function UserFactory($resource, ENV) {
		var service = {
			http: http
		};

		return service;

		function http() {
			return $resource(ENV.apiEndpoint + '/users/:id', {id: '@id'}, {
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