import { useGetCurrentPolicy, useRemovePolicy } from '@/services/policies.service';
import { skipToken } from '@reduxjs/toolkit/dist/query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Button } from '@/components/UI/Button';
import { toast } from 'react-toastify';

export const Policy = () => {
	const { id } = useParams();
	const { data } = useGetCurrentPolicy(id ?? skipToken);
	const [removePolicy] = useRemovePolicy();

	const navigate = useNavigate();

	const remove = () => {
		if(id){
			removePolicy(id)
				.unwrap()
				.then(() => {
					navigate('/policies');
					toast.success('Policy is removed');
				});
		}
	};

	const submit = () => {
		navigate('edit');
	};

	return (
		<div style={{paddingBottom: 44}}>
			<Name>{data?.name}</Name>
			<br/>
			<CodeEditor
				value={JSON.stringify(data?.paths)}
				language="json"
				disabled
				tabIndex={3}
				padding={15}
				style={{
					fontSize: 12,
					fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
					borderRadius: 4
				}}
			/>
			<BtnsWrapper>
				<Button label='Edit policy' background='#1976d2' color='#fff' onClick={submit}/>
				<Button label='Remove' background='#EE4B42' color='#fff' onClick={remove}/>
			</BtnsWrapper>
		</div>
	);
};


const BtnsWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	gap: 8px;
`;

const Name = styled.h2`
	font-size: 20px;
	font-weight: bold;
	margin-top: 16px;
`;