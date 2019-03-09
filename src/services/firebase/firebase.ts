import * as firebase from 'firebase';

interface User extends firebase.UserInfo {}
interface Reference extends firebase.database.Reference{}
interface App extends firebase.app.App{}
interface Database extends firebase.database.Database{}
interface Auth extends firebase.auth.Auth{}

const config = {
	apiKey: 'AIzaSyB5xaUOWd9NHg5RUcjvdP4Ejvdus1qDnBU',
	authDomain: 'my-awesome-marriage.firebaseapp.com',
	databaseURL: 'https://my-awesome-marriage.firebaseio.com',
	projectId: 'my-awesome-marriage',
	storageBucket: 'my-awesome-marriage.appspot.com',
	messagingSenderId: '706161234818',
};

const firebaseApp = firebase.initializeApp(config);


export {
	firebaseApp,
	firebase,
	User,
	Reference,
	App,
	Database,
	Auth,
};

