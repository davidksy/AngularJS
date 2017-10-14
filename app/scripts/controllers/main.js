'use strict';

/**
 * @ngdoc function
 * @name angularJsexamApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsexamApp
 */
angular.module('angularJsexamApp')
	//$q= 동기화 모듈을 위해 사용, http: 통신을 위해 사용
  .factory('Data', ['$http','$q', function($http, $q){
  		return {
  			getData : function(url){
  				
  				var defered = $q.defer();
  				$http({
  					method:'GET', url:url,
  					headers:{
  						'Content-Type':'application/text;charset=utf-8'
  					}
  				}).then(function(response){
  					defered.resolve(response);
  				}, function(response){ //error발생시, alert창 나타냄
  					window.alert(JSON.stringify(response));
  				});
  				return defered.promise;

  			},
  			setData : function(url, data){
  				var defered = $q.defer();
  				$http({
  					method:'POST', url:url, data:data,
  					headers:{
  						'Content-Type':
  						'application/x-www-form-urlencoded'
  					}
  				}).then(function(response){
  					defered.resolve(response);
  				}, function(response){
  					defered.resolve(response);
  				});
  				return defered.promise;
  			},
  			modifyData: function(url, data){
  				var defered = $q.defer();
  				$http({
  					method:'PUT', url:url, data:data,
  					headers:{
  						'Content-Type':
  						'application/x-www-form-urlencoded'
  					}
  				}).then(function(response){
  					defered.resolve(response);
  				}, function(response){
  					defered.resolve(response);
  				});
  				return defered.promise;

  			},
  			deleteData: function(url, data){
  				var defered = $q.defer();
  				$http({
  					method:'DELETE', url:url, data:data,
  					headers:{
  						'Content-Type':
  						'application/x-www-form-urlencoded'
  					}
  				}).then(function(response){
  					defered.resolve(response);
  				}, function(response){
  					defered.resolve(response);
  				});
  				return defered.promise;
  			}
  		}
  }])
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
