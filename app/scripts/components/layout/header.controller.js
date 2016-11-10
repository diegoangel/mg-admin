/**
 * @ngdoc function
 * @name admin.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the admin
 */

(function() {
	'use strict';
	
	angular
		.module('admin.layout')
	 	.controller('HeaderController', HeaderController);

	 	function HeaderController() {
			var vm = this;
			vm.title = 'Create User';

			activate();

			function activate() {
			}
	 	}
})();