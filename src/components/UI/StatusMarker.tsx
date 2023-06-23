import React from 'react';
import styled from 'styled-components';

interface IProps {
	theme?: string
}

enum themes {
	online = '#0EB372',
	offline = '#EE4B42', 
	wait = '#eed442', 
	default = '#000'
}

export const StatusMarker: React.FC<IProps> = ({theme}) => 
	<Marker {...{theme}}/>;

const Marker = styled.div`
	width: 12px;
	height: 12px;
	border-radius: 12px;
	background-color: ${(props: IProps) => themes[props.theme as keyof typeof themes] || themes.default};
`;