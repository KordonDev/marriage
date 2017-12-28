import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { initializeApp } from 'firebase';
import { Provider } from 'react-firebase';

const config = {
	apiKey: 'AIzaSyD1h-noaQWGGGgt5U9dblVihVVFvtwOqTE',
	authDomain: 'marriage-test.firebaseapp.com',
	databaseURL: 'https://marriage-test.firebaseio.com',
	projectId: 'marriage-test',
	storageBucket: 'marriage-test.appspot.com',
	messagingSenderId: '757149552794',
};
const fireBaseApp = initializeApp(config);

ReactDOM.render(
	<Provider firebaseApp={fireBaseApp}>
		<App />
	</Provider>,
	document.getElementById('root') as HTMLElement
);
registerServiceWorker();
