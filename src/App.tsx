import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Files from './modules/files';
import Header from '@/components/Header';
import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import TitleContent from '@/components/TitleContent';


function App() {
	const location = useLocation();

	return (
		<AppWrapper>
			<Header />
			<TitleContent title={location.pathname} />
			<AppContent>
				<Provider store={store}>
					<Routes>
						<Route path='/files' element={<Files />} />
					</Routes>
				</Provider>
			</AppContent>
		</AppWrapper>
	);
}

const AppWrapper = styled.div``;

const AppContent = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  padding-left: 20px;
`;

export default App;
