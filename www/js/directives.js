// JavaScript Document
var app=angular.module('fetswallet.directives', [])

//directives to make sure only input values are entered
.directive('isNumber', function () {
	return {
		require: 'ngModel',
		link: function (scope) {	
			scope.$watch('allval.productPrice', function(newValue,oldValue) {
                var arr = String(newValue).split("");
                if (arr.length === 0) return;
                if (arr.length === 1 && (arr[0] == '-' || arr[0] === '.' )) return;
                if (arr.length === 2 && newValue === '-.') return;
                if (isNaN(newValue)) {
                    scope.allval.productPrice = oldValue;
                }
            });
		}
	};
});