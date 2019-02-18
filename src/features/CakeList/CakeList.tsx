import * as React from 'react';
import { Heading, Button, Container } from 'rebass';
import { connect } from 'react-firebase';
import styled from 'styled-components';

import { App } from '../../services/firebase';
import addCurrentUser, { InjectedCurrentUserProps } from '../../hocs/addCurrentUser';
import Input from '../../common/Input/Input';
import Label from '../../common/Label';
import Icon from '../../common/Icon';
import { Cake, cakeServerResponseToCake, CakeServerResponse } from './cake.types';


interface State {
	cake: string;
	bakedBy: string;
}

interface ExternalProps {}
interface FirebaseInjectedProps {
	cakes: {[key: string]: CakeServerResponse};
	removeCake: (key: string) => any;
	addCake: (cake: CakeServerResponse) => any;
}
interface Props extends ExternalProps, FirebaseInjectedProps, InjectedCurrentUserProps {}


class CakeList extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			cake: '',
			bakedBy: '',
		};
	}

	updateCake = (cake: React.ChangeEvent<HTMLInputElement>) => this.setState({ cake: cake.target.value });
	updateBakedBy = (bakedBy: React.ChangeEvent<HTMLInputElement>) => this.setState({ bakedBy: bakedBy.target.value });

	removeCake = (key: string) => {
		this.props.removeCake(key);
	}

	addCake = () => {
		this.props.addCake({
			title: this.state.cake,
			bakedBy: this.state.bakedBy,
			creator: this.props.currentUser && this.props.currentUser.uid,
		});
		this.setState({
			cake: '',
			bakedBy: '',
		});
	}

	handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		this.addCake();
	}

	renderCake = (cake: Cake) => (
		<tr key={cake.key}>
			<td>{cake.title}</td>
			<td>{cake.bakedBy}</td>
			<td>
				{this.props.currentUser && this.props.currentUser.uid === cake.creator && <Button onClick={this.removeCake.bind(this, cake.key)}>Entfernen</Button>}
			</td>
		</tr>
	)

	render() {
		return (
			<Container>
				<Heading level={2}>Kuchenübersicht</Heading>
				<table>
					<thead>
						<tr>
							<td>
								<Label htmlFor="title">Kuchennamen</Label>
							</td>
							<td>
								<Label htmlFor="bakedBy">Name</Label>
							</td>
							<td/>
						</tr>
					</thead>
					<tbody>
						{cakeServerResponseToCake(this.props.cakes).map(this.renderCake)}
						<tr>
							<td>
								<form onSubmit={this.handleSubmit}>
									<Input id="title" required placeholder="Was?" type="text" value={this.state.cake} onChange={this.updateCake} />
								</form>
							</td>
							<td>
								<form onSubmit={this.handleSubmit}>
									<Input id="bakedBy" required placeholder="Wer?" type="text" value={this.state.bakedBy} onChange={this.updateBakedBy} />
								</form>
							</td>
							<td>
								<Button onClick={this.addCake} disabled={this.state.cake === '' || this.state.bakedBy === ''}>
									Add
								</Button>
							</td>
						</tr>
					</tbody>
				</table>
				{this.renderPrototypeOfTable()}
			</Container>
		);
	}

	renderPrototypeOfTable = () => (
		<div>
			<Table>
				<thead>
					<tr>
						<TableHead>Kuchen</TableHead>
						<TableHead>Name</TableHead>
						<TableHead/>
					</tr>
				</thead>
				<tbody>

					<tr>
						<TableData>Pfirsich</TableData>
						<TableData>Arne</TableData>
						<TableData><Icon alt="remove cake" name="trash" /></TableData>
					</tr>
					<tr>
						<TableData>Pfirsich</TableData>
						<TableData>Arne</TableData>
						<TableData><Icon alt="remove cake" name="trash" /></TableData>
					</tr>
					<tr>
						<TableData>Pfirsich</TableData>
						<TableData>Arne</TableData>
						<TableData><Icon alt="remove cake" name="trash" /></TableData>
					</tr>
					<tr>
						<TableDataInput>Name:</TableDataInput>
						<TableDataInput>
								<Input placeholder="Max" type="text" id="name" value={this.state.bakedBy} onChange={this.updateBakedBy} />
						</TableDataInput>
						<TableDataInput/>
					</tr>
					<tr>
						<TableDataInput>Kuchen:</TableDataInput>
						<TableDataInput>
								<Input placeholder="Apfelkuchen" type="text" id="name" value={this.state.cake} onChange={this.updateCake} />
						</TableDataInput>
						<TableDataInput><Icon alt="add cake" name="plus" /></TableDataInput>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}

const Table = styled.table`
	width: 100%;
	text-align: left;
	box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
	border-collapse: collapse;

	tr:nth-child(odd) {
		background-color: white;
	}
	tr:nth-child(even) {
		background-color: grey;
	}
`;

const TableHead = styled.th`
	padding: 12px 25px;
	background-color: #363636;
	color: white;
`;

const TableData = styled.td`
	padding: 12px 25px;
`;

const TableDataInput = TableData.extend`
	background-color: white;
`;


const mapFirebaseToProps = (props: Props, ref: any, firebase: App) => ({
	cakes: `cakes`,
	addCake: (cake: CakeServerResponse) => ref(`cakes/`).push(cake),
	removeCake: (key: string) => ref(`cakes/${key}`).remove(),
});

export default addCurrentUser()(
	connect(
		mapFirebaseToProps
	)(CakeList)
);
