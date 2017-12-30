console.log('lazy.js');

const componentName = 'lazy',
	subModule = angular.module('app.' + componentName, ['ui.router']);

export {subModule};