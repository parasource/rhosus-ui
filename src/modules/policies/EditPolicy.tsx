import { useState } from 'react';
import { Input } from './components/Input';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Button } from '@/components/UI/Button';
import styled from 'styled-components';
import { useEditPolicy, useGetCurrentPolicy } from '@/services/policies.service';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { skipToken } from '@reduxjs/toolkit/dist/query';

export const EditPolicy = () => {
	const { id } = useParams();
	const { data } = useGetCurrentPolicy(id ?? skipToken);

	const [name, setName] = useState(data?.name || '');
	const [policy, setPolicy] = useState(JSON.stringify(data?.paths));
	const [editPolicy] = useEditPolicy();

	const reset = () => {
		setName(data?.name || '');
		setPolicy(JSON.stringify(data?.paths));
	};

	const submit = () => {
		if(name.trim() && policy){
			const requestData = {
				name,
				body: JSON.parse(policy)
			};

			editPolicy(requestData)
				.unwrap()
				.then(() => {
					toast.success('Policy edit');
					reset();
				});
		}
	};

	return (
		<div style={{paddingBottom: 44}}>
			<Input label='Name' value={name} onChange={(e) => setName(e.currentTarget.value)}/>
			<br/>
			<CodeEditor
				value={policy}
				language="json"
				data-color-mode="dark"
				placeholder='
						"paths": [
								{
										"path": "/files",
										"capabilities": [
												"sudo"
										]
								}
						]
				'
				tabIndex={3}
				onChange={(evn) => setPolicy(evn.target.value)}
				padding={15}
				style={{
					fontSize: 12,
					fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
					borderRadius: 4
				}}
			/>
			<BtnsWrapper>
				<Button label='Edit policy' background='#1976d2' color='#fff' onClick={submit}/>
				<Button label='Cancel' onClick={reset}/>
			</BtnsWrapper>
		</div>
	);
};


const BtnsWrapper = styled.div`
	margin-top: 32px;
	display: flex;
	gap: 8px;
`;