import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
	label?: string | HTMLElement | ReactElement,
	onClick?(): void,
	background?: string,
	color?: string,
	margin?: string,
}

export const Button: React.FC<IProps> = ({label, onClick, background, color, margin}) => {
	return (
		<Wrapper {...{background, color, onClick, margin}}>
			{label}
		</Wrapper>
	);
};

const Wrapper = styled.div`
	cursor: pointer;
	display: block;
	padding: 8px;
	font-weight: 400;
	font-size: 12px;
	background: ${(props: IProps) => props.background || '#F0F0F0'};
	color: ${(props: IProps) => props.color || '#000'};
	margin: ${(props: IProps) => props.margin};
	border: 1px solid #ccc;
	border-radius: 4px;
	width: fit-content;
	&:hover{
		transition: .2s;
		opacity: .6;
	}
`;