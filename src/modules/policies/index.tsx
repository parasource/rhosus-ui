import { useEffect, useState } from 'react';
import { Search } from './components/Search';
import styled from 'styled-components';
import { Button } from '@/components/UI/Button';
import { AddFilled } from '@fluentui/react-icons';
import { Table } from './components/Table';
import { useGetPoliciesList } from '@/services/policies.service';
import { useNavigate } from 'react-router-dom';

export const Policies = () => {
	const [getPoliciesList, { data }] = useGetPoliciesList();
	const navigate = useNavigate();
	
	const [value, setValue] = useState('');

	useEffect(() => {
		getPoliciesList(value);
	}, []);


	return (
		<div>
			<Header>
				<Search 
					{...{value}} 
					onChange={(e) => setValue(e.currentTarget.value)}
					onSubmit={(e) => e.preventDefault()}/>
				<Button>
					<ButtonContent onClick={() => navigate('create')}>
						Create policy
						<AddFilled/>
					</ButtonContent>
				</Button>
			</Header>
			<Table {...{data}}/>
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