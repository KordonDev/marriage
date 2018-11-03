import * as React from 'react';
import styled from 'styled-components';

interface Props {
	options: string[];
	name: string;
	onChange: (selected: string) => void;
	selected?: string;
	className?: string;
}

class Switch extends React.Component<Props, {}> {
	handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		this.props.onChange(event.target.value);
	}

	render() {
		const { options, name, className } = this.props;


		return (
			<Div className={className}>
				{
					options.map((option: string) => (
						<div key={option}>
							<Input type="radio" id={`${option}-${name}`} name={this.props.name} value={option} onChange={this.handleChange} checked={this.props.selected === option}/>
							<Label htmlFor={`${option}-${name}`}>{option}</Label>
						</div>
						)
					)
				}
			</Div>
		);
	}
}

const Div = styled.div`
	display: flex;
	justify-content: flex-start;
	padding: 40px;
	border: 1px solid darkgray;
	border-radius: 5px;
`;

const Input = styled.input`
	position: absolute;
	clip: rect(0, 0, 0, 0);
	overflow: hidden;

	&:checked + label {
		background-color: #A5DC86;
		-webkit-box-shadow: none;
		box-shadow: none;
	}
`;

const Label = styled.label`
	display: inline-block;
	color: rgba(0, 0, 0, 0.6);
	text-align: center;
	padding: 6px 14px;
	border: 1px solid darkgray;
	transition: all 0.1s ease-in-out;

	&:hover {
		cursor: pointer;
	}
`;

export default styled(Switch)``;
