import React from 'react';
import useContextMenu from '@/hooks/useContextMenu';
import styled, { css } from 'styled-components';

interface IProps {
  children: string | JSX.Element | JSX.Element[],
  menuComponent: Element | JSX.Element | (() => JSX.Element),
}

const ContextMenuProvider: React.FC<IProps> = ({children, menuComponent}) => {
	const { clicked, setClicked, points, setPoints } = useContextMenu();
	return (
		<div onContextMenu={(e: any) => { 
			e.preventDefault(); 
			setClicked(true); 
			setPoints({ x: e.pageX, y: e.pageY });}}>
			{children}
			{clicked && 
				<ContextMenu top={points.y} left={points.x}>
					<>
						{menuComponent}
					</>
				</ContextMenu>}
		</div>
	);
};

const ContextMenu = styled.div`
  position: absolute;
  width: 160px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-sizing: border-box;
	box-shadow: 0px 0px 20px rgba(136, 136, 136, 0.25);
	font-family: 'MPLUS-Regular';
  ${(props: any) => css`
    top: ${props.top}px;
    left: ${props.left}px;
  `}
`;

export default ContextMenuProvider;