/**
 * @ngdoc function
 * @name appApp.controller:EquipmentUpdateController
 * @description
 * # EquipmentUpdateController
 * Controller of the appApp
 */
(function() {
	'use strict';

	angular
		.module('admin.equipment')
		.controller('EquipmentUpdateController', EquipmentUpdateController);

	function EquipmentUpdateController($scope, EquipmentFactory) {
		var vm = this;
		vm.title = 'Update Equipment';

		activate();

		function activate() {
		}
	}
})();