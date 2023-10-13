import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #2e0b82;
  border-bottom: 1px solid gray;
  box-shadow: 2px 3px 5px lightgrey;
`;

export const List = styled.ul`
  width: 100%;
  font-size: 30px;
  font-weight: 900;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  &.active {
    color: rgb(20, 150, 144);
  }
`;

export const Main = styled.main`
    margin-top: 60px;
    padding-top: 15px;
`;