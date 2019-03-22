import * as React from 'react';
import styled from 'styled-components';
import { Container, Flex, Box } from 'rebass';

import GoogleMapsPreview from './GoogleMapsPreview/GoogleMapsPreview';


export interface Props {
	className?: string;
}

class Party extends React.Component<Props> {
	render() {
		return (
			<Container>
				<Heading>Unser Tag</Heading>
				<Heading>Trauung</Heading>
				<FlexFullWith justify="center">
					<Box width={[ 1, 1, 0.8 ]}>
						<Image src={require('./kircheLangensteinbach.jpg')} />
					</Box>
				</FlexFullWith>
				<p>
					Ab 14:00 Uhr findet unsere Trauung in der Ludwigskirche in Langensteinbach statt.
				</p>
				<p>
					Im Anschluss seid ihr alle zum Sektempfang im Hof des Gemeindehaus eingeladen.
				</p>

				<Heading3>
					Anfahrt zur Evangelische Kirche Langensteinbach
				</Heading3>
				<p>
					Parken könnt am Besten an der Weinbrennerstraße oder hinter der Zentralapotheke.
				</p>

				<GoogleMapsPreview src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10487.97400280363!2d8.498203273014903!3d48.91551607827654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47970e76e139189b%3A0xd1373584be37d6f7!2sWeinbrennerkirche+Langensteinbach!5e0!3m2!1sde!2sde!4v1543523784047" />


				<Heading>Feier</Heading>
				<FlexFullWith justify="center">
					<Box width={[ 1, 1, 0.8 ]}>
						<Image src={require('./kasino_ettlingen_1.jpg')} />
					</Box>
				</FlexFullWith>
				<p>
					Geplant ist das wir gegen 17:30 Uhr am Kasino in Ettlingen ankommen damit wir ungefähr im 18:00 Uhr essen können.
				</p>
				<p>
					Mehr Informationen zum Kasion könnt ihr euch <a href="https://www.ettlingen.de/,Lde/startseite/Wirtschaft+_+Verkehr/kasino.html">hier</a> ansehen.
				</p>

				<Heading3>Anfahrt</Heading3>
				<p>
					Parkplätze gibt es auf dem Gelände der des Kasino genug.
				</p>
				<GoogleMapsPreview src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10481.947603348823!2d8.408031592517409!3d48.9442139885997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc648ce7d18dce62a!2sKasino+Ettlingen!5e0!3m2!1sde!2sde!4v1543523704908" />
			</Container>
		);
	}
}

const Heading = styled.h1`
	font-family: 'Mr De Haviland', 'cursive';
	font-size: 60px;
	font-weight: 300;
	margin-top: 24px;
	margin-bottom: 24px;
`;

/*const Heading2 = styled.h2`
	font-family: 'Mr De Haviland', 'cursive';
	font-size: 50px;
	font-weight: 300;
	margin-top: 18px;
	margin-bottom: 18px;
`;
*/
const Heading3 = styled.h3`
	font-family: 'Mr De Haviland', 'cursive';
	font-size: 32px;
	font-weight: 300;
	margin-top: 12px;
	margin-bottom: 12px;
`;

const FlexFullWith = styled(Flex)`
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
`;


export default Party;
