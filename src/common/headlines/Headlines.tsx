import styled, { css } from 'styled-components';
import theme from '../../common/theme';

const PageHeading = styled.h1`
	color: ${theme.colors.textColor};
	font-family: 'Mr De Haviland', 'cursive';
	font-size: 60px;
	font-weight: 300;
	margin: 24px 0;
`;

const SectionHeading = styled.h2`
	color: ${theme.colors.textColor};
	font-size: 40px;
	font-weight: 300;
	margin: 18px 0;
	font-family: 'Open Sans', sans-serif;
	${(props: { decorated?: boolean}) => props.decorated ?
		css`font-family: 'Mr De Haviland', 'cursive'` :
		''
	}
`;


const StructuralHeading = styled.h3`
	color: ${theme.colors.textColor};
	font-size: 32px;
	font-weight: 300;
	margin: 12px 0;
	font-family: 'Open Sans', sans-serif;
	${(props: { decorated?: boolean}) => props.decorated ?
		css`font-family: 'Mr De Haviland', 'cursive'` :
		''
	}
`;

export {
	PageHeading,
	SectionHeading,
	StructuralHeading
};
