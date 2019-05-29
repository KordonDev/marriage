import * as React from 'react';
import { Button, Box } from 'rebass';
import { connect } from 'react-firebase';

import { App } from '../../services/firebase';
import addCurrentUser, { InjectedCurrentUserProps } from '../../hocs/addCurrentUser';
import Input from '../../common/Input/Input';
import Icon from '../../common/Icon';
import { Cake, cakeServerResponseToCake, CakeServerResponse } from './cake.types';
import { IconButton } from '../../common/Button';
import { Table, TableData, TableDataInput, TableDataLabel, TableHead, LabelTabel } from '../../common/Table';


interface State {
	cake: string;
	bakedBy: string;
}

interface ExternalProps {
	firebasePath: string;
	stopAdding?: boolean;
	isLoading: boolean;
	setLoading: (isLoading: boolean) => void;
}
interface FirebaseInjectedProps {
	cakes: {[key: string]: CakeServerResponse};
	removeCake: (key: string) => any;
	addCake: (cake: CakeServerResponse) => any;
}
interface Props extends ExternalProps, FirebaseInjectedProps, InjectedCurrentUserProps {
}


class CakeList extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			cake: '',
			bakedBy: '',
		};
	}

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.cakes !== nextProps.cakes) {
			this.props.setLoading(nextProps.cakes === undefined);
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
		if (!this.props.stopAdding) {
			this.addCake();
		}
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
			<div>
				{this.props.isLoading && <Box mb="50px"/>}
				{!this.props.isLoading && (
					<Table>
						<thead>
							<tr>
								<TableHead>Name</TableHead>
								<TableHead>Essen</TableHead>
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
							<tr hidden={this.props.stopAdding}>
								<TableDataLabel>
									<LabelTabel htmlFor="name">
										Name:
									</LabelTabel>
									<LabelTabel htmlFor="name">
										Essen:
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
			</div>
		);
	}

	renderCakeRow = (cake: Cake) => (
		<tr key={cake.key}>
			<TableData>{cake.bakedBy}</TableData>
			<TableData>{cake.title}</TableData>
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


const InvisibleButton = Button.extend`
	display: none;
`;

const mapFirebaseToProps = (props: Props, ref: any, firebase: App) => ({
	cakes: props.firebasePath,
	addCake: (cake: CakeServerResponse) => ref(`${props.firebasePath}/`).push(cake),
	removeCake: (key: string) => ref(`${props.firebasePath}/${key}`).remove(),
});

export default addCurrentUser<ExternalProps>()(
	connect(
		mapFirebaseToProps
	)(CakeList)
);
