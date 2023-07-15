import { backgrounds, borders, colors } from '@/constants/themes';
import React, { ReactElement } from 'react';
import styled from 'styled-components';

interface IProps {
	children?: string | HTMLElement | ReactElement,
	onClick?(): void,
	theme?: string,
	margin?: string,
}

interface IStyledProps {
	background?: any,
	color?: any,
	border?: any,
}

export const Button: React.FC<IProps> = ({children, onClick, theme, margin}) => {
	const background = (backgrounds as any)[theme || 'secondary'];
	const color = (colors as any)[theme || 'secondary'];
	const border = (borders as any)[theme || 'secondary'];

	return (
		<Wrapper {...{onClick, margin, background, color, border}}>
			{children}
		</Wrapper>
	);
};

const Wrapper = styled.div<IStyledProps>`
	cursor: pointer;
	display: block;
	padding: 6px 20px;
	font-weight: 400;
	font-size: 12px;
	background: ${(props: IStyledProps)  => props?.background?.default};
	color: ${(props: IStyledProps)  => props?.color?.default};
	margin: ${(props: IProps) => props.margin};
	border: ${(props: IStyledProps)  => props?.border?.default};
	border-radius: 4px;
	line-height: 142.857%;
	width: fit-content;
	&:hover{
		transition: .2s;
		background: ${(props: IStyledProps)  => props?.background?.hover};
		color: ${(props: IStyledProps)  => props?.color?.hover};
		border: ${(props: IStyledProps)  => props?.border?.hover};
	}
	&:active{
		background: ${(props: IStyledProps)  => props?.background?.pressed};
		color: ${(props: IStyledProps)  => props?.color?.pressed};
		border: ${(props: IStyledProps)  => props?.border?.pressed};
	}
	&:disabled{
		background: ${(props: IStyledProps)  => props?.background?.disables};
		color: ${(props: IStyledProps)  => props?.color?.disables};
		border: ${(props: IStyledProps)  => props?.border?.disables};
	}
	&:focus{
		background: ${(props: IStyledProps)  => props?.background?.focused};
		color: ${(props: IStyledProps)  => props?.color?.focused};
		border: ${(props: IStyledProps)  => props?.border?.focused};
	}
`;