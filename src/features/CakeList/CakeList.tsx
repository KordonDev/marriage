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
import { IconButton } from '../../common/Button';
import LoadingSpinner from '../../common/LoadingSpinner';


interface State {
	cake: string;
	bakedBy: string;
	isLoading: boolean;
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
			isLoading: !props.cakes,
		};
	}

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.cakes === undefined && nextProps.cakes !== undefined) {
			this.setState({ isLoading: false });
		}
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
				<Heading mb={30} level={2}>Kuchenübersicht</Heading>
				{this.state.isLoading && <LoadingSpinner />}
				{!this.state.isLoading && (
					<Table>
						<thead>
							<tr>
								<TableHead>Kuchen</TableHead>
								<TableHead>Name</TableHead>
								<TableHead/>
							</tr>
						</thead>
						<tbody>
							{cakeServerResponseToCake(this.props.cakes).map(this.renderCakeRow)}
							<tr>
								<TableData/>
								<TableData/>
								<TableData/>
							</tr>
							<tr>
								<TableDataLabel>
									<LabelTabel htmlFor="name">
										Wer:
									</LabelTabel>
									<LabelTabel htmlFor="name">
										Kuchen:
									</LabelTabel>
								</TableDataLabel>
								<TableDataInput>
									<form onSubmit={this.handleSubmit}>
										<Input placeholder="Max" type="text" required id="bakedby" value={this.state.bakedBy} onChange={this.updateBakedBy} />
										<Input placeholder="Apfelkuchen" required type="text" id="name" value={this.state.cake} onChange={this.updateCake} />
										<InvisibleButton type="submit"/>
									</form>
								</TableDataInput>
								<TableDataInput>
									<IconButton onClick={this.addCake}>
										<Icon alt="add cake" name="plus" />
									</IconButton>
								</TableDataInput>
							</tr>
						</tbody>
					</Table>
				)}
			</Container>
		);
	}

	renderCakeRow = (cake: Cake) => (
		<tr key={cake.key}>
			<TableData>{cake.title}</TableData>
			<TableData>{cake.bakedBy}</TableData>
			<TableData>
				{this.props.currentUser && this.props.currentUser.uid === cake.creator && (
					<IconButton onClick={this.removeCake.bind(this, cake.key)}>
						<Icon alt="remove cake" name="trash" />
					</IconButton>
				)}
			</TableData>
		</tr>
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
		background-color: #EBEBEB;
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

const TableDataLabel = TableDataInput.extend`
	vertical-align: top;
`;

const LabelTabel = Label.extend`
	display: block;
	padding-bottom: 12px;
`;

const InvisibleButton = Button.extend`
	display: none;
`;

const mapFirebaseToProps = (props: Props, ref: any, firebase: App) => ({
	cakes: `cakes`,
	addCake: (cake: CakeServerResponse) => ref(`cakes/`).push(cake),
	removeCake: (key: string) => ref(`cakes/${key}`).remove(),
});

export default addCurrentUser<ExternalProps>()(
	connect(
		mapFirebaseToProps
	)(CakeList)
);
