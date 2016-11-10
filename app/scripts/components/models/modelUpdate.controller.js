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
		.controller('ModelUpdateController', ModelUpdateController);

	function ModelUpdateController($scope, ModelFactory) {
		var vm = this;
		vm.title = 'Update Model';

		activate();

		function activate() {
		}
	}
})();