import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
ReactDOM.render(
	<div>
	<Router>
		<Route path="/" component={App}>
		</Route>
	</Router>
	</div>
	, document.querySelector('.container1'))