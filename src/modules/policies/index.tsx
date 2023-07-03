import { useState } from 'react';
import { Search } from './components/Search';
import styled from 'styled-components';
import { Button } from '@/components/UI/Button';
import { AddFilled, PulseSquareFilled } from '@fluentui/react-icons';
import { Table } from './components/Table';

export const Policies = () => {
	// const [getPoliciesList, { data }] = useGetPoliciesList();

	// useEffect(() => {
	// 	getPoliciesList(null);
	// }, []);

	const [value, setValue] = useState('');

	return (
		<div>
			<Header>
				<Search 
					{...{value}} 
					onChange={(e) => setValue(e.currentTarget.value)}
					onSubmit={(e) => e.preventDefault()}/>
				<Button label={<ButtonContent>
					Create policy
					<AddFilled/>
				</ButtonContent>}/>
			</Header>
			<Table/>
		</div>
	);
};

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-bottom: 16px;
	border-bottom: 1px solid #ccc;
`;

const ButtonContent = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;