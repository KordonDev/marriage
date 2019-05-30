import * as React from 'react';
import { Container } from 'rebass';

import CakeList from '../CakeList';
import LoadingSpinner from '../../common/LoadingSpinner';
import { PageHeading, SectionHeading } from '../../common/headlines';

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
				<PageHeading>
					Eure Beiträge
				</PageHeading>
				<p hidden={this.state.churchLoading || this.state.dessertLoading}>
					Wir würden uns freuen, wenn ihr uns am Tag unserer Hochzeit etwas unterstützen könntet, indem ihr etwas zum Sektempfang oder dem Nachtisch beitragen könntet.
				</p>
				<p>
					Bitte denkt auch daran, eure Behälter mit eurem Namen zu beschriften, damit ihr sie zurückbekommt.
				</p>

				{(this.state.churchLoading || this.state.dessertLoading) && <LoadingSpinner />}
				<div hidden={this.state.churchLoading || this.state.dessertLoading}>
					<SectionHeading>Sektempfang</SectionHeading>
					<p>
						Für den Sektempfang würden wir uns über Fingerfood freuen.
					</p>
					<p>
						Am Tag der Hochzeit bringt ihr das Essen am besten direkt in den Hof des Gemeindehaus.
					</p>
				</div>
				<CakeList firebasePath="church/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setChurchLoading} />

				<div hidden={this.state.churchLoading || this.state.dessertLoading}>
					<SectionHeading>Nachtisch</SectionHeading>
					<p>
						Den Nachtisch wird es im Kasino geben. Dort wird es auch Kühlmöglichkeiten geben.
					</p>
				</div>
				<CakeList firebasePath="dessert/cakes" isLoading={this.state.churchLoading || this.state.dessertLoading} setLoading={this.setDessertLoading} stopAdding />
			</Container>
		);
	}
}

export default Support;
