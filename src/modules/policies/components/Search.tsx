import { SearchFilled } from '@fluentui/react-icons';
import React from 'react';
import styled from 'styled-components';

interface IProps {
	onChange(arg: any | null): void,
	onSubmit(arg: any | null): void,
	value: string,
}

export const Search: React.FC<IProps> = ({onChange, value, onSubmit}) => {
	return (
		<Wrapper {...{onSubmit}}>
			<button type="submit">
				<SearchFilled/>
			</button>
			<input type="text" placeholder='Search' {...{onChange, value}}/>
		</Wrapper>
	);
};

const Wrapper = styled.form`
	display: flex;
	padding: 4px 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	align-items: center;
	button{
		border: none;
		background: none;
		outline: none;
		font-size: 24px;
		cursor: pointer;
		padding: 0;
		margin: 0;
	}
	input{
		font-size: 16px;
		padding: 8px 0;
		width: 240px;
		border: none;
		background: none;
		outline: none;
		margin-left: 8px;
	}
`;