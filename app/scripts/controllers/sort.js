'use strict';

/**
 * @ngdoc function
 * @name demoSortableApp.controller:SortCtrl
 * @description
 * # SortCtrl
 * Controller of the demoSortableApp
 */
angular.module('demoSortableApp')
  .controller('SortCtrl', function ($scope) {
    $scope.data = ['Test1','Test2','Test3','Test4','Test5'];
    $scope.sortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id !== destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
    },
    orderChanged: function (event) {
    },
    containment: '#board'
  };
  });
