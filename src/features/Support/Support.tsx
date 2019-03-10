import * as React from 'react';
import { Heading, Container } from 'rebass';

import CakeList from '../CakeList';
import LoadingSpinner from '../../common/LoadingSpinner';

interface Props {}

interface State {
	churchLoading: boolean;
	dessertLoading: boolean;
}

class Support extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			churchLoading: true,
			dessertLoading: true,
		};
	}

	setChurchLoading = (isLoading: boolean) => this.setState({ churchLoading: isLoading });
	setDessertLoading = (isLoading: boolean) => this.setState({ dessertLoading: isLoading });

	render() {
		return (
			<Container>
				<Heading mb={30} level={2}>Kuchenübersicht</Heading>

				{this.state.churchLoading || this.state.dessertLoading && <LoadingSpinner />}
				<div>
					<Heading level={3}>Sektempfang</Heading>
					<CakeList firebasePath="church/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setChurchLoading} />

					<Heading level={3}>Nachtisch</Heading>
					<CakeList firebasePath="dessert/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setDessertLoading} />
				</div>
			</Container>
		);
	}
}

export default Support;
