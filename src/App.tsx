import React from 'react';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Files } from './components/Files';

function App() {

	return (
		<Provider store={store}>
			<Files/>
		</Provider>
	);
}

export default App;
