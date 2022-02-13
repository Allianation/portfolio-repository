import PropTypes from 'prop-types';
import { Route } from 'react-router';
import styled from 'styled-components';
import Main from './Main';
import Sidebar from './Sidebar';

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
