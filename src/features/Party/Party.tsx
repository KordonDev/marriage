import * as React from 'react';
import styled from 'styled-components';
import { Container, Flex, Box } from 'rebass';

import GoogleMapsPreview from './GoogleMapsPreview/GoogleMapsPreview';
import { PageHeading, SectionHeading, StructuralHeading } from '../../common/headlines';


export interface Props {
	className?: string;
}

class Party extends React.Component<Props> {
	render() {
		return (
			<Container>
				<PageHeading>Unser Tag</PageHeading>
				<SectionHeading>Trauung</SectionHeading>
				<FlexFullWith justify="center">
					<Box width={[ 1, 1, 0.5 ]}>
						<Image src={require('./kirche.jpg')} />
					</Box>
				</FlexFullWith>
				<p>
					Um 14:00 Uhr findet unsere Trauung in der Ludwigskirche in Langensteinbach statt.
				</p>
				<p>
					Im Anschluss seid ihr alle zum Sektempfang im Hof des Gemeindehaus eingeladen.
				</p>

				<StructuralHeading>
					Anfahrt zur Evangelische Kirche Langensteinbach
				</StructuralHeading>
				<p>
					Parken könnt ihr am besten an der Weinbrennerstraße oder hinter der Zentralapotheke.
				</p>

				<GoogleMapsPreview src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10487.97400280363!2d8.498203273014903!3d48.91551607827654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970e76e139189b%3A0xd1373584be37d6f7!2sWeinbrennerkirche+Langensteinbach!5e0!3m2!1sde!2sde!4v1543523784047" />


				<SectionHeading>Feier</SectionHeading>
				<FlexFullWith justify="center">
					<Box width={[ 1, 1, 0.8 ]}>
						<Image src={require('./kasino.jpg')} />
					</Box>
				</FlexFullWith>
				<p>
					Geplant ist, dass wir gegen 17:30 Uhr am Kasino in Ettlingen ankommen, damit wir ungefähr um 18:00 Uhr essen können.
				</p>
				<p>
					Mehr Informationen zum Kasion könnt ihr euch <a href="https://www.ettlingen.de/,Lde/startseite/Wirtschaft+_+Verkehr/kasino.html">hier</a> ansehen.
				</p>

				<StructuralHeading>Anfahrt</StructuralHeading>
				<p>
					Parkplätze gibt es auf dem Gelände des Kasino.
				</p>
				<GoogleMapsPreview src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10481.947603348823!2d8.408031592517409!3d48.9442139885997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc648ce7d18dce62a!2sKasino+Ettlingen!5e0!3m2!1sde!2sde!4v1543523704908" />
			</Container>
		);
	}
}

const FlexFullWith = styled(Flex)`
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
`;


export default Party;
