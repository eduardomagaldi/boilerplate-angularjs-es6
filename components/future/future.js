import setComponent from './future.component';

console.log('future.js');

const componentName = 'future',
	appFutureModule = angular.module('app.' + componentName, []);

setComponent(componentName);

export {appFutureModule};