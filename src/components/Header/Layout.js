import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Ul, HeaderTag, NavTag, StyledNavLink, Main  } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      
      <HeaderTag>
                <NavTag>
                        
                        <Ul>
                            <li><StyledNavLink to="/">Home</StyledNavLink></li>
                            <li><StyledNavLink to="/movies">Movies</StyledNavLink></li>
                        </Ul>
                    </NavTag>
               
            </HeaderTag>
            <Main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </Main>  
    </>
  );
};
