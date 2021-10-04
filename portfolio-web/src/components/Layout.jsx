import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Route } from 'react-router';
import Sidebar from './Sidebar';
import Main from './Main';

const LayoutStyled = styled.div``;

const Layout = (props) => {
    const { 
        component: ReceivedComponent,
    } = props;
    
    return (  
        <Route render = {() => (
            <LayoutStyled>
                <Sidebar/>
                <Main component={ReceivedComponent}/>
            </LayoutStyled>
        )}/>
    );  
};

Layout.propTypes = {
    component: PropTypes.func.isRequired, 
};

export default Layout;
