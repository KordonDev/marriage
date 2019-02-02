import * as React from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';

import { PersonWithKey, Food, Participate } from '../Response';
import Input from '../../../common/Input';
import Switch from '../../../common/Switch';
import Card from '../../../common/Card';
import { H2 } from '../../../common/headlines';

interface State {}

interface Props {
	person: PersonWithKey;
	onUpdate: (person: PersonWithKey) => void;
}

class ResponsePerson extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
	}

	updateAllergie = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onUpdate({
			...this.props.person,
			allergies: event.target.value,
		});
	}

	handleParticipation = (newValue: Participate) => {
		this.props.onUpdate({
			...this.props.person,
			participate: newValue,
		});
	}

	handleFood = (newValue: Food) => {
		this.props.onUpdate({
			...this.props.person,
			food: newValue,
		});
	}

	render() {
		return (
			<Card>
				<div>
					<FlexFullWidth justify="center">
						<H2>{this.props.person.name}</H2>
					</FlexFullWidth>

					<Question>Ich nehme Teil?</Question>
					<Switch name={`participate-${this.props.person.key}`} options={[ Participate.Yes, Participate.No ]} selected={this.props.person.participate} onChange={this.handleParticipation} key={this.props.person.key + 'participate'}/>

					<Question>Du isst?</Question>
					<Switch name={`food-${this.props.person.key}`} options={[ Food.Meet, Food.Vegetary, Food.Vegan, Food.Nothing ]} selected={this.props.person.food} onChange={this.handleFood}/>

					<Question>Hast du Essensallergien?</Question>
					<Input placeholder="z.B. Laktose" type="text" value={this.props.person.allergies} onChange={this.updateAllergie}/>
				</div>
			</Card>
		);
	}
}

const Question = styled.p`
	margin-top: 40px;
`;

const FlexFullWidth = Flex.extend`
	width: 100%;
`;

export default ResponsePerson;
