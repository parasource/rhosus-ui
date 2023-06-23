import styled from 'styled-components';
import { useMemo } from 'react';

const TitleContent = ({ title }: { title: string }) => {

	const transformTitle: string | null = useMemo(() => {
		if (title === '/login' || title === '/registration') return null;

		return title.slice(1).charAt(0).toUpperCase() + title.slice(2);
	}, [title]);

	return (
		<>
			{transformTitle && (
				<TitleWrapper>
					<Title>{transformTitle}</Title>
					<Line />
				</TitleWrapper>
			)}
		</>
	);
};

const TitleWrapper = styled.section`
  margin: 24px 0 32px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-weight: 600;
  color: #000000;
  margin: 0 20px 24px 20px;
`;

const Line = styled.hr`
  margin: 0;
  width: 100%;
  border: 1px solid #CCCCCC;
`;

export default TitleContent;