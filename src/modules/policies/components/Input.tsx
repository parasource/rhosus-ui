import React from 'react';
import styled from 'styled-components';

interface IProps {
	onChange(arg: any | null): void,
	label: string,
	value: string,
}

export const Input: React.FC<IProps> = ({value, onChange, label}) => {
	return (
		<Wrapper>
			{label}
			<input {...{value, onChange}}/>
		</Wrapper>
	);
};


const Wrapper = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-top: 16px;
	input{
		width: 100%;
		padding: 8px 16px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
		display: block;
		margin-top: 8px;
		outline: none;
		box-sizing: border-box;
	}
`;