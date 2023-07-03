import { useState } from 'react';
import { Input } from './components/Input';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Button } from '@/components/UI/Button';
import styled from 'styled-components';
import { useCreatePolicy } from '@/services/policies.service';
import { toast } from 'react-toastify';

export const CreatePolicy = () => {
	const [name, setName] = useState('');
	const [policy, setPolicy] = useState('');
	const [createPolicy] = useCreatePolicy();

	const reset = () => {
		setName('');
		setPolicy('');
	};

	const submit = () => {
		if(name.trim() && policy){
			const data = {
				name,
				body: policy
			};

			createPolicy(data)
				.then(() => {
					toast.success('Policy created');
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
				<Button label='Create policy' background='#1976d2' color='#fff' onClick={submit}/>
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