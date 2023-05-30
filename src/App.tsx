import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Files } from './components/Files';
import ContextMenuProvider from './components/ContextMenu/ContextMenuProvider';
import { FileMenu } from './components/ContextMenu/FileMenu';

function App() {
	return (
		<Provider store={store}>
			<ContextMenuProvider menuComponent={<FileMenu/>}>
				<Files />
			</ContextMenuProvider>
		</Provider>
	);
}

export default App;
