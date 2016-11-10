/**
 * @ngdoc overview
 * @name Clients
 * @description
 *
 * Clients module of the application.
 */
angular
	.module('admin.clients', [])
	.config(setClientRoutes($stateProvider));

function setClientRoutes($stateProvider) {
	return $stateProvider
		.state('root.clients', {
			url: '/clients',
			views: {
				'@': {			
					templateUrl: 'views/clients/list.html',
					controller: 'ClientListCtrl',
					controllerAs: 'clientList'
				}
			}
		})
		.state('root.clients.new', {
			url: '/new',
			views: {
				'@': {			
					templateUrl: 'views/clients/new.html',
					controller: 'ClientCreateCtrl',
					controllerAs: 'clientCreate'
				}
			}				
		})	
		.state('root.clients.show', {
			url: '/:id/show',
			views: {
				'@': {			
					templateUrl: 'views/clients/show.html',
					controller: 'ClientReadCtrl',
					controllerAs: 'clientRead'
				}
			}				
		})
		.state('root.clients.edit', {
			url: '/:id/edit',		
			views: {
				'@': {			
					templateUrl: 'views/clients/new.html',
					controller: 'ClientUpdateCtrl',
					controllerAs: 'clientUpdate'
				}
			}				
		});
}