import React, { useEffect } from 'react';
import { useGetFilesList } from '@/services/files.service';
import { TFile } from '@/types/files.types';

export const Files = () => {
	const [getFilesList, { data }] = useGetFilesList();

	useEffect(() => {
		getFilesList('');
	}, []);

	return (
		<div style={{height: '100vh'}}>
			{data?.list &&
				data.list.map((file: TFile, index: number) => (
					<p key={'files_item_' + index}>{file.name}</p>
				))}
		</div>
	);
};
