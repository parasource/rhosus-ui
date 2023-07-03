import { DocumentRegular, MoreHorizontalFilled } from '@fluentui/react-icons';
import styled from 'styled-components';

export const Table = () => {
	return (
		<Wrapper>
			<Item>
				<NameTD>
					<DocumentRegular/>
					Default
				</NameTD>
				<MoreBtn>
					<MoreHorizontalFilled/>
				</MoreBtn>
			</Item>
			<Item>
				<NameTD>
					<DocumentRegular/>
					Root
				</NameTD>
				<MoreBtn>
					<MoreHorizontalFilled/>
				</MoreBtn>
			</Item>
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