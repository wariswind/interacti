// JavaScript Document
var app=angular.module('fetswallet.controllers', [])

//main controller at run time
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate,$rootScope) {
	//toggle the app left
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleRight();
  	};
  	
})

//home controller
.controller('homeCtrl', function($scope, $rootScope) {
	
})

//home controller
.controller('menuCtrl', function($scope, $rootScope) {
	
})


//bills payment controller
.controller('billsCtrl', function($scope, $rootScope) {
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	//marchant initailization
	$scope.merchants=[{"name":"Coca Cola","products":[{"name":"Pet Coke","Descr":"rubber pet","value":"100.00"},{"name":"Fanta","Descr":"rubber pet",
		"value":"100.00"},{"name":"Can Coke","Descr":"Can Coke","value":"120.00"}]},{"name":"Fan Milk","products":[{"name":"Fan yogurt @100NGN",
		"Descr":"small fan yogurt ","value":"100.00"},{"name":"Vanlila yogurt @150NGN","Descr":"small vanlila yogurt ","value":""},
		{"name":"Fan Milk @120NGN","Descr":"small fan milk ","value":"120.00"}]
	}];
	$scope.showform=true;
	$scope.payment=function(){
		$scope.showform=null;
	}
	$scope.PaymentCancel=function(){
		$scope.showform=true;
		$scope.authPay=false; $scope.authMsg="";
		$scope.sucDisplay=false; $scope.sucMsg="";
	}
})

.controller('topupCtrl', function($scope, $rootScope) {
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	$scope.networks=[{"name":"MTN","cards":[{"name":"100","value":"100.00"},{"name":"200","value":"200.00"},{"name":"400","value":"400.00"},
		{"name":"750","value":"750.00"},{"name":"1500","value":"1500.00"},{"name":"3000","value":"3000.00"},{"name":"6000","value":"6000.00"}]},
		{"name":"AIRTEL","cards":[{"name":"200","value":"200.00"},{"name":"500","value":"500.00"},{"name":"1000","value":"1000.00"},
		{"name":"1500","value":"1500.00"}]},{"name":"ETISALAT","cards":[{"name":"250","value":"250.00"},{"name":"500","value":"500.00"},
		{"name":"750","value":"750.00"},{"name":"1000","value":"1000.00"}]},{"name":"VISAFONE","cards":[{"name":"200","value":"200.00"},
		{"name":"500","value":"500.00"},{"name":"1000","value":"1000.00"}]},{"name":"STARCOMMS","cards":[{"name":"500","value":"500.00"},
		{"name":"1000","value":"1000.00"}]},{"name":"GLO","cards":[{"name":"100","value":"100.00"},{"name":"150","value":"150.00"},
		{"name":"500","value":"500.00"},{"name":"1000","value":"1000.00"}]
	}];
	$scope.showform=true;
	$scope.topup=function(){
		$scope.showform=null;
	}
	$scope.topupCancel=function(){
		$scope.showform=true;
		$scope.authPay=false; $scope.authMsg="";
		$scope.sucDisplay=false; $scope.sucMsg="";
	}
})
.controller('walletTransCtrl', function($scope, $rootScope) {
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	$scope.showform=true;
	$scope.transfer=function(){
		alert('hello');
		if($scope.amount<100){
			alert('amount should not not be less than 100.00NGN');
			return;
		}
		$scope.showform=null;
	}
	$scope.transferCancel=function(){
		$scope.showform=true;
		$scope.authPay=false; $scope.authMsg="";
		$scope.sucDisplay=false; $scope.sucMsg="";
	}
})
.controller('bankTransCtrl', function($scope, $rootScope) {
	$scope.banks=[{"name":"ACCESS BANK","bankid":""},{"name":"MAINSTREET BANK","bankid":""},{"name":"ECOBANK","bankid":""},{"name":"FIRSTBANK","bankid":""},{"name":"FCMB","bankid":""},{"name":"FIDELITY","bankid":""},{"name":"GTBANK","bankid":""},{"name":"IBTC","bankid":""},{"name":"ENTERPRISE BANK","bankid":""},{"name":"STERLING BANK","bankid":""},{"name":"SKYE BANK","bankid":""},{"name":"UBA","bankid":""},{"name":"UNION BANK","bankid":""},{"name":"UNITY BANK","bankid":""},{"name":"WEMA BANK","bankid":""},{"name":"ZENITH BANK","bankid":""},{"name":"CMFB","bankid":""},{"name":"KEYSTONE BANK","bankid":""},{"name":"DIAMOND BANK","bankid":""},{"name":"ASO SAVINGS","bankid":""}];
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	$scope.showform=true;
	$scope.bank=function(){
		if($scope.allval.amount<100){
			alert('amount should not not be less than 100.00NGN');
			return;
		}
		$scope.showform=null;
	}
	$scope.bankCancel=function(){
		$scope.showform=true;
		$scope.authPay=false; $scope.authMsg="";
		$scope.sucDisplay=false; $scope.sucMsg="";
	}
})
.controller('checkBalCtrl', function($scope, $rootScope) {
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	$scope.showform=true;
})
.controller('signINCtrl', function($scope, $rootScope,$location) {
	$scope.allval=[];
	$scope.authPay=false; $scope.authMsg="";$scope.sucMsg="";
	$scope.sucDisplay=false;
	$scope.showform=true;
	$scope.login=function(){
		$location.path("/plane/home");
	}
})