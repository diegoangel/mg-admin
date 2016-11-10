/**
 * @ngdoc function
 * @name appApp.controller:EquipmentReadController
 * @description
 * # EquipmentReadController
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.models')
		.controller('ModelDeleteController', ModelDeleteController);

	function ModelDeleteController($scope, ModelFactory) {
		var vm = this;

		activate();

		function activate() {
		}
	}
})();