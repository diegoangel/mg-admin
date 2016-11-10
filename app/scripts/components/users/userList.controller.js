/**
 * @ngdoc controller
 * @name appApp.controller:UserListCtrl
 * @description
 * List all users
 */
(function() {
	'use strict';

	angular
		.module('admin.users')
		.controller('UserListController', UserListController);

	function UserListController($scope, $compile, $resource, UserFactory, DTOptionsBuilder, DTColumnBuilder) {
		var vm = this;
		vm.title = 'User List';

		activate();

		function activate() {
			vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
				return UserFactory.query().$promise;
			})
			.withPaginationType('full_numbers')
			.withButtons([
				'copy',
				'print'
			])		

			vm.dtColumns = [		
				DTColumnBuilder.newColumn('user').withTitle('Usuario'),
				DTColumnBuilder.newColumn('descripcion').withTitle('Descripcion'),
				DTColumnBuilder.newColumn('cliente').withTitle('Cliente'),
				DTColumnBuilder.newColumn(null).withTitle().notSortable().renderWith(actionsHtml)				
			];

			function actionsHtml() {
				var btnView = '<button class="btn-floating mr-5" ng-click=""><i class="mdi mdi-magnify"></i></button>';
				var btnEdit = '<button class="btn-floating mr-5" ng-click=""><i class="mdi mdi-pencil"></i></button>';
				var btnDelete = '<button class="btn-floating" ng-click=""><i class="mdi mdi-delete"></i></button>';
				return  btnView + btnEdit + btnDelete;
			}        	
		}
	}
})();
