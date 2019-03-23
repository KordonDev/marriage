import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import urls from '../../shared/urls';


interface Props extends RouteComponentProps<{}> {}

class Login extends React.Component<Props> {

	componentDidMount() {
		this.props.history.replace(urls.home.url);
	}

	render() {
		return null;
	}
}

export default withRouter(Login);
