import { compile } from 'path-to-regexp';

export interface Route {
	displayName: string;
	url: string;
}

export default {
	home: {
		displayName: 'Start',
		url: '/home',
	},
	party: {
		displayName: 'Hochzeitstag',
		url: '/party',
	},
	response: {
		displayName: 'Rückmeldung',
		url: '/response',
	},
	support: {
		displayName: 'Unterstützung',
		url: '/support',
	},
	impressum: {
		displayName: 'Impressum',
		url: '/impressum',
	},
	login: {
		displayName: 'Einloggen',
		rawUrl: '/login/:loginCode?',
		url: compile('/login/:loginCode?'),
	},
};
