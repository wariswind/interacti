// JavaScript Document
angular.module('fetswallet', ['ionic','LocalStorageModule', 'fetswallet.controllers','fetswallet.services','fetswallet.directives'])

//config url list

.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	
	 .state('mainState', {
      url: "/mainState",
      abstract: true,
      templateUrl: "templates/mainstate.html",
	  
    })
	.state('plane', {
      url: "/plane",
      abstract: true,
      templateUrl: "templates/plane.html",
	  
    })
	
	.state('plane.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
		  controller: 'homeCtrl'
        }
      }
    })
	.state('mainState.paybills', {
      url: "/paybills",
      views: {
        'menuContent' :{
          templateUrl: "templates/paybills.html",
		  controller: 'billsCtrl'
        },
		'menuRight' :{
          templateUrl: "templates/menuleft.html",
		  controller: 'menuCtrl'
        }
      }
    })
	.state('mainState.topup', {
      url: "/topup",
      views: {
        'menuContent' :{
          templateUrl: "templates/topup.html",
		  controller: 'topupCtrl'
        },
		'menuRight' :{
          templateUrl: "templates/menuleft.html",
		  controller: 'menuCtrl'
        }
      }
    })
	.state('mainState.walletTrans', {
      url: "/walletTrans",
      views: {
        'menuContent' :{
          templateUrl: "templates/walletTrans.html",
		  controller: 'walletTransCtrl'
        },
		'menuRight' :{
          templateUrl: "templates/menuleft.html",
		  controller: 'menuCtrl'
        }
      }
    })
	.state('mainState.bankTrans', {
      url: "/bankTrans",
      views: {
        'menuContent' :{
          templateUrl: "templates/bankTrans.html",
		  controller: 'bankTransCtrl'
        },
		'menuRight' :{
          templateUrl: "templates/menuleft.html",
		  controller: 'menuCtrl'
        }
      }
    })
	.state('mainState.checkBal', {
      url: "/checkBal",
      views: {
        'menuContent' :{
          templateUrl: "templates/checkBal.html",
		  controller: 'checkBalCtrl'
        },
		'menuRight' :{
          templateUrl: "templates/menuleft.html",
		  controller: 'menuCtrl'
        }
      }
    })
	.state('mainState.startup', {
      url: "/startup",
      views: {
        'menuContent' :{
          templateUrl: "templates/start.html",
		  controller: 'checkBalCtrl'
        }
		
      }
    })
	.state('plane.startup', {
      url: "/startup",
      views: {
        'menuContent' :{
          templateUrl: "templates/start.html",
		  controller: 'checkBalCtrl'
        }
		
      }
    })
	.state('plane.signin', {
      url: "/signin",
      views: {
        'menuContent' :{
          templateUrl: "templates/signin.html",
		  controller: 'signINCtrl'
        }
		
      }
    })
	.state('plane.register', {
      url: "/register",
      views: {
        'menuContent' :{
          templateUrl: "templates/register.html",
		  controller: 'checkBalCtrl'
        }
		
      }
    })
	.state('plane.about', {
      url: "/about",
      views: {
        'menuContent' :{
          templateUrl: "templates/about.html",
		  controller: 'checkBalCtrl'
        }
		
      }
    })
	
	//default link at start up
	$urlRouterProvider.otherwise('plane/startup');
})