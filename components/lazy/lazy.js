import setComponent from './lazy.component';

console.log('lazy.js');

const componentName = 'lazy',
	appFutureModule = angular.module('app.' + componentName, ['ui.router']);

setComponent(componentName);

export {appFutureModule};