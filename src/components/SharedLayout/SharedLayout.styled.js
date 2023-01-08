import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = styled.header`
  margin-bottom: 15px;
  padding-left: 20px;
  height: 60px;
  box-shadow: 1px 6px 14px 1px rgba(23, 19, 19, 0.75);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 25px;
  color: black;

  &:hover:not(.active) {
    color: coral;
  }

  &.active {
    color: red;
  }
`;

export { Header, Nav, Link };
