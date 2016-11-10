/**
 * @ngdoc overview
 * @name Models
 * @description
 *
 * Models module of the application.
 */
(function() {
    'use strict';

    angular
        .module('admin.models', [
            'admin.core'
        ])
		.config(function ($stateProvider) {
			$stateProvider
			.state('root.models', {
				url: '/models',
				views: {
					'@': {			
						templateUrl: 'views/models/list.html',
						controller: 'ModelListCtrl',
						controllerAs: 'modelList'
					}
				}					
			})
			.state('root.models.show', {
				url: '/:id/show',
				views: {
					'@': {			
						templateUrl: 'views/models/show.html',
						controller: 'ModelReadCtrl',
						controllerAs: 'modelRead'
					}
				}					
			});
		});
})();