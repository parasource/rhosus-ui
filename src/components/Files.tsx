import React, { useEffect } from 'react';
import { useGetFilesList } from '@/services/filesService';

export const Files = () => {
	const {data} = useGetFilesList(null);

	return (
		<div>
			{data && 
				data.map((file: any, index: number) => (
					<p key={'files_item_' + index}>{file.name}</p>
				))}
		</div>
	);
};
