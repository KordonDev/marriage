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
				<Heading mb={30} level={2}>Eure Beiträge</Heading>

				{(this.state.churchLoading || this.state.dessertLoading) && <LoadingSpinner />}
				<div>
					<Heading level={3}>Sektempfang</Heading>
					<p>
						Für den Sektempfang würden wir uns über Finger Food und Kuchen freuen, welches man ohne Besteck essen kann.
					</p>
					<p>
						Am Tag der Hochzeit bringt ihr das Essen ab besten direkt in den Hof des Gemeindehaus.
					</p>
					<CakeList firebasePath="church/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setChurchLoading} />

					<Heading level={3}>Nachtisch</Heading>
					<p>
						Beim Nachtisch sind wir im Kasino, wodruch wir Besteck und Teller haben. Somit sind euren Kreationen keine Grenzen gesetzt.
					</p>
					<CakeList firebasePath="dessert/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setDessertLoading} />
				</div>
			</Container>
		);
	}
}

export default Support;
