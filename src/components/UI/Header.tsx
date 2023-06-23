import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<HeaderWrapper>
			<Link to='/'>
				<Logo>
					<img src={'/images/logo.svg'} alt='Rhosus - distribution file system' />
				</Logo>
			</Link>

			<Navigation>
				<NavigationItem>
					<Link to='/files'>
						Files
					</Link>
				</NavigationItem>

				<NavigationItem>
					<Link to='/clusters'>
						Clusters
					</Link>
				</NavigationItem>

				<NavigationItem>
					<Link to='/policies'>
						Policies
					</Link>
				</NavigationItem>
			</Navigation>
		</HeaderWrapper>
	);
};

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #000;
  padding: 30px 16px;
`;

const Navigation = styled.nav``;

const NavigationItem = styled.span`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &:not(:last-child) {
    margin-right: 32px;
  }
`;

const Logo = styled.div`
  margin-right: 64px;
  transition: 0.2s;
	height: 47px;
  &:hover {
    opacity: 0.8;
  }
`;

export default Header;