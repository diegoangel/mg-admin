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
		.module('admin.equipment')
		.controller('EquipmentReadController', EquipmentReadController);

	function EquipmentReadController($scope, EquipmentFactory) {
		var vm = this;
		vm.title = 'Read Equipment';

		activate();

		function activate() {
		}
	}
})();