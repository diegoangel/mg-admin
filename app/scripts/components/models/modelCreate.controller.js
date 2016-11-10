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
		.controller('ModelCreateController', ModelCreateController);

	function ModelCreateController($scope, ModelFactory) {
		var vm = this;
		vm.title = 'Create Model';

		activate();

		function activate() {
		}
	}
})();