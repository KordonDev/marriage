import * as React from 'react';
import styled, { StyledComponentClass, css } from 'styled-components';
import { responsiveStyle } from 'styled-system';

import { Flex, Container } from 'rebass';
import theme from '../../common/theme';
import urls from '../../shared/urls';


interface State {}
interface Props {}

class Home extends React.Component<Props, State> {


	render() {
		return (
			<div>
				<HeroImage src={require('./heroImage.jpg')} height={[ '40vh', '55vh', '65vh', '75vh' ]} />

				<Container>
					<Flex justify="center" align="center">
						<Heading fontSize={[ '100px', '120px' ]}>Willkommen</Heading>
					</Flex>
					<p>
						Schön, dass ihr es bis hier hin geschafft habt. Wir ihr sicher wisst, heiraten wir am 6.7. in der Ludwigskirche in Langensteinbach und feiern danach im Kasino in Ettlingen.
					</p>
					<p>
						Auf dieser Seite bekommt ihr eine grobe Übersicht, wie wir unseren <Link href={urls.party.url}>Hochzeitstag</Link> geplant haben.
					</p>
					<p>
						Damit wir besser mit euch planen können, sollt ihr euch unter <Link href={urls.response.url}>Rückmeldung</Link> zurückmelden. Ändern könnt ihr die Daten bis zum 6.6., also einen Monat vor der Hochzeit.
					</p>
					<p>
						Da wir nicht alles selbst machen können, wäre es super, wenn ihr uns <Link href={urls.support.url}>unterstützt</Link>. Wir brauchen für den Sektempfang nach der Kirche Finger Food und Kuchen, sowie für den Nachtisch eure besten Kreationen.
					</p>
					<p>
						Wir freuen uns darauf unsere Hochzeit mit euch verbringen zu können und dazu jetzt schnell <Link href={urls.response.url}>zurückmelden</Link>!
					</p>
				</Container>
			</div>
		);
	}
}

const Heading = styled.h1`
	font-size: 120px;
	font-weight: 300;
	color: ${theme.colors.textColor};
	margin-top: 0;
	margin-bottom: 12px;
	font-family: 'Mr De Haviland', 'cursive';
	${(props: { fontSize: string | number | string[] | number [] }) => css`
		${responsiveStyle({ cssProperty: 'font-size', prop: 'fontSize' })({ fontSize: props.fontSize })}
	`}
` as StyledComponentClass<{ fontSize: string | number | string[] | number [] }, any>;

interface ImageProps {
	src: string;
	height: string | number | string[] | number [];
}
const HeroImage = styled.div`
	margin-top: -20px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	${(props: ImageProps) => css`
		background-image: url(${props.src});
		${responsiveStyle({ cssProperty: 'height', prop: 'height' })({ height: props.height })}
	`}
` as StyledComponentClass<ImageProps, any>;

const Link = styled.a`
	cursor: pointer;
`;

export default Home;
