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
		.factory('UserTypeFactory', UserTypeFactory);

	function UserTypeFactory($resource, ENV) {
		var service = {
			http: http
		};

		return service;

		function http() {
			return $resource(ENV.apiEndpoint + '/users/type', {
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