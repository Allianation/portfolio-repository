import { Route } from 'react-router';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Main from './Main';

const LayoutStyled = styled.div``;

// eslint-disable-next-line react/prop-types
const Layout = ({component:Component}) => {
    return (  
        <Route render = {() => (
            <LayoutStyled>
                <Sidebar/>
                <Main>
                    <Component/>
                </Main>
            </LayoutStyled>
        )}/>
    );  
};

export default Layout;
