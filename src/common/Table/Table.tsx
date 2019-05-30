import styled, { css } from 'styled-components';

import Label from '../Label';

export const Table = styled.table`
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

export const TableHead = styled.th`
	padding: 12px 25px;
	background-color: #363636;
	color: white;
	${(props: { width?: string }) => props.width ? css`
		width: ${props.width};
	` : ''};
`;

export const TableData = styled.td`
	padding: 12px 25px;
`;

export const TableDataInput = TableData.extend`
	background-color: white;
`;

export const TableDataLabel = TableDataInput.extend`
	vertical-align: top;
`;

export const LabelTabel = Label.extend`
	display: block;
	padding-bottom: 12px;
`;
