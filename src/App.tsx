import { Provider } from 'react-redux';
import { store } from '@/store/store';
import Header from '@/components/UI/Header';
import styled from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import TitleContent from '@/components/UI/TitleContent';
import { Clusters } from './modules/clusters';
import { Policies } from './modules/policies';
import { CreatePolicy } from './modules/policies/CreatePolicy';


function App() {
	const location = useLocation();

	return (
		<AppWrapper>
			<Header />
			<TitleContent title={location.pathname} />
			<AppContent>
				<Provider store={store}>
					<Routes>
						<Route path='/clusters' element={<Clusters />} />
						<Route path='/policies' element={<Policies />} />
						<Route path='/policies/create' element={<CreatePolicy />} />
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
