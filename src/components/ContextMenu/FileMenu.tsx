import { ArrowDownload16Filled, ArrowDownload16Regular, Copy16Filled, Copy16Regular, Delete16Regular, Edit16Filled, Folder16Regular, FolderProhibited16Regular, Info16Filled, Info16Regular, Rename16Regular } from '@fluentui/react-icons';
import React from 'react';
import styled from 'styled-components';

export const FileMenu = () => {
	return (
		<ContextMenu>
			<ul>
				<li><Rename16Regular/> Rename</li>
				<li><Copy16Regular/> Copy</li>
				<li><ArrowDownload16Regular/> Download</li>
				<li><Info16Regular/> Info</li>
				<li><Folder16Regular/> Move to</li>
				<DeleteLi><Delete16Regular/> Delete</DeleteLi>
			</ul>
		</ContextMenu>
	);
};

const ContextMenu = styled.div`
	font-size: 12px;
  ul {
    box-sizing: border-box;
    padding: 4px 0;
    margin: 0;
    list-style: none;
  }
  ul li {
    padding: 4px 12px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;
  }
  /* hover */
  ul li:hover {
    cursor: pointer;
    background-color: #FAFAFA;
  }
`;

const DeleteLi = styled.li`
		text-decoration: none;
		color: rgba(235, 54, 55, 0.8);
		padding: 4px 12px;
		border-top: 1px solid #CCCCCC;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 8px;`;