import React, { useEffect } from 'react';
import { useGetFilesList } from '@/services/files.service';
import { TFile } from '@/types/file.types';

export const Files = () => {
	const [getFilesList, {data}] = useGetFilesList();

	useEffect(() => {
		getFilesList('folder');
	}, []);

	return (
		<div>
			{data?.list && 
				data.list.map((file: TFile, index: number) => (
					<p key={'files_item_' + index}>{file.name}</p>
				))}
		</div>
	);
};
