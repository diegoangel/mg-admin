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
		.controller('ModelReadController', ModelReadController);

	function ModelReadController($scope, ModelFactory) {
		var vm = this;
		vm.title = 'Read Model';

		activate();

		function activate() {
		}
	}
})();