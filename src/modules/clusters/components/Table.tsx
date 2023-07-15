import { Button } from '@/components/UI/Button';
import { StatusMarker } from '@/components/UI/StatusMarker';
import { ArrowClockwiseRegular, EditRegular } from '@fluentui/react-icons';
import styled from 'styled-components';

export const Table = () => {
	return (
		<Wrapper>
			<table>
				<tr>
					<th>Status</th>
					<th>Name</th>
					<th>Master</th>
					<th>Delay(ms)</th>
					<th></th>
				</tr>
				<tbody>
					<tr>
						<td><StatusMarker theme='online'/></td>
						<td>Cluster</td>
						<td>1</td>
						<td>1.4</td>
						<BtnsWrapper>
							<Button>
								<ButtonContent>
									<ArrowClockwiseRegular/><span>Update</span>
								</ButtonContent>
							</Button>
							<Button theme='primary'>
								<ButtonContent>
									<EditRegular/><span>Edit</span>
								</ButtonContent>
							</Button>
						</BtnsWrapper>
					</tr>
					<tr>
						<td><StatusMarker theme='offline'/></td>
						<td>Cluster</td>
						<td>1</td>
						<td>1.4</td>
						<BtnsWrapper>
							<Button>
								<ButtonContent>
									<ArrowClockwiseRegular/><span>Update</span>
								</ButtonContent>
							</Button>
							<Button theme='primary'>
								<ButtonContent>
									<EditRegular/><span>Edit</span>
								</ButtonContent>
							</Button>
						</BtnsWrapper>
					</tr>
				</tbody>
			</table>
		</Wrapper>
	);
};

const ButtonContent = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
`;

const BtnsWrapper = styled.td`
	display: flex;
	gap: 16px;
	justify-content: center;
	align-items: center;
`;

const Wrapper = styled.div`
	width: 100%;
	border-radius: 4px;
	border: 1px solid #CCC;
	background: #FFF;
	margin-top: 16px;
	box-sizing: border-box;
	table{
		width: 100%;
		border-collapse: collapse;
		th{
			font-weight: 400;
			border: 0;
			border-bottom: 1px solid #ccc;
			padding: 12px 20px;
			text-align: left;
		}
		td{
			text-align: left;
			padding: 8px 20px;
		}
		tr:hover{
			td{
				background-color: #F8F8F8;
			}
		}
		tr:not(:first-child){
			td{
				border-top: 1px solid #ccc;
			}
		}
	}
`;
