import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { List, HeaderTag, StyledNavLink, Main  } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <HeaderTag>
          <List>
            <li><StyledNavLink to="/">Home</StyledNavLink></li>
            <li><StyledNavLink to="/movies">Movies</StyledNavLink></li>
          </List>
      </HeaderTag>
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
      </Main>  
    </>
  );
};
