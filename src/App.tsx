import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from '@/store/index';

function App() {
	return (
		<Provider store={store}>
			<AppContent />
		</Provider>
	);
}

const AppContent = styled.div``;

export default App;
