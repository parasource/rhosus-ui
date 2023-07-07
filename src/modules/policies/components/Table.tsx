import { TPoliciesList } from '@/types/policies.types';
import { DocumentRegular, MoreHorizontalFilled } from '@fluentui/react-icons';
import { FC } from 'react';
import styled from 'styled-components';

interface IProps {
	data: TPoliciesList | undefined
}

export const Table: FC<IProps> = ({data}) => {
	return (
		<Wrapper>
			{data?.policies.map((policy: any) => (
				<Item key={'policy_' + policy.name}>
					<NameTD>
						<DocumentRegular/>
						{policy.name}
					</NameTD>
					<MoreBtn>
						<MoreHorizontalFilled/>
					</MoreBtn>
				</Item>))}
		</Wrapper>
	);
};

const NameTD = styled.td`
	display: flex;
	gap: 8px;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
`;

const MoreBtn = styled.div`
	cursor: pointer;
	padding: 8px;
`;

const Item = styled.div`
	padding: 8px 0;
	display: flex;
	gap: 16px;
	justify-content: space-between;
	align-items: center;
	&:hover{
		background-color: #F8F8F8;
	}
	&:not(:first-child){
		border-top: 1px solid #ccc;
	}
`;