/**
 * @ngdoc function
 * @name appApp.controller:ClientsCtrl
 * @description
 * # ClientsCtrl
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.clients')
		.controller('ClientDeleteController', ClientDeleteController);

	function ClientDeleteController($scope, ClientFactory) {
		var vm = this;

		activate();

		function activate() {
		}
	}
})();