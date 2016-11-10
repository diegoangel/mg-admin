/**
 * @ngdoc overview
 * @name Users
 * @description
 *
 * Users module of the application.
 */
 (function(){
 	'use strict';

	angular
	.module('admin.users', [
		'admin.core'
	])
	.config(function ($stateProvider) {
		$stateProvider
		.state('root.users', {
			url: '/users',
			ncyBreadcrumb: {
				label: 'Usuarios'
			},			
			views: {
				'@': {			
					templateUrl: 'views/users/list.html',
					controller: 'UserListCtrl',
					controllerAs: 'vm'
				}
			}
		})
		.state('root.users.new', {
			url: '/new',
			views: {	
				'@': {			
					templateUrl: 'views/users/new.html',
					controller: 'UserCreateCtrl',
					controllerAs: 'userCreate'
				}
			}				
		})	
		.state('root.users.show', {
			url: '/:id/show',
			views: {
				'@': {			
					templateUrl: 'views/users/show.html',
					controller: 'UserReadCtrl',
					controllerAs: 'userRead'
				}
			}
		})
		.state('root.users.edit', {
			url: '/:id/edit',
			resolve: {
				user: ['$stateParams', 'UserFactory',
					function($stateParams, UserFactory) {
						return UserFactory.get({id: $stateParams.id});
				}],
				clients: ['$stateParams', 'ClientFactory',
					function($stateParams, ClientFactory) {
						return ClientFactory.query();
				}],
				userTypes: '',

			},
			views: {
				'@': {			
					templateUrl: 'views/users/new.html',
					controller: 'UserUpdateCtrl',
					controllerAs: 'vm'
				}
			},
			ncyBreadcrumb: {
				label: 'Editar usuario'
			},			
		})
		.state('root.users.delete', {
			url: '/:id/delete',
			views: {
				'@': {
					controller: 'UserDeleteCtrl',
					controllerAs: 'userDelete'
				}
			}				
		})		
		.state('root.users.login', {
			url: '/login',
			views: {
				'@': {			
					templateUrl: 'views/users/login.html',
					controller: 'UserLoginCtrl',
					controllerAs: 'userLogin'
				}
			}
		})
		.state('root.users.logout', {
			url: '/logout',
			views: {
				'@': {			
					controller: 'UserLogoutCtrl',
					controllerAs: 'userLogout'
				}
			}			
		});
	});

 })();