import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const NavBarContainer = styled.nav`
  width: 100%;
  background: pink;
  color: gray;
  padding: 10px 20px;
`;

const NavCenter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  transition:all 2s ease;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  transition: color 0.3s ease;

  &.active {
    font-weight: bold;
    color: blue;
  }

  &:hover {
    color: #ffcccc;
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavCenter>
        <Logo>MixMaster</Logo>
        <NavLinks>
          <StyledNavLink to="/" activeClassName="active">
            Home
          </StyledNavLink>
          <StyledNavLink to="/about" activeClassName="active">
            About
          </StyledNavLink>
          <StyledNavLink to="/newsletter" activeClassName="active">
            Newsletter
          </StyledNavLink>
        </NavLinks>
      </NavCenter>
    </NavBarContainer>
  );
};

export default NavBar;
