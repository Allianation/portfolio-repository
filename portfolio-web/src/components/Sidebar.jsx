import styled from 'styled-components';
import Navigation from './Navigation';

const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
    overflow: hidden;
    transition: all .4s ease-in-out;
    @media screen and (max-width:1200px) {
        transform: translateX(-100%);
        z-index: 20;
    }
`;

const Sidebar = () => {
    const navItems = [
        {name: 'Home', to: '/portfolio-repository/'},
        {name: 'About', to: '/portfolio-repository/about'},
        {name: 'Experience', to: '/portfolio-repository/experience'},
        {name: 'Education', to: '/portfolio-repository/education'},
        {name: 'Contact', to: '/portfolio-repository/contact'}
    ];
    
    return (
        <SidebarStyled>
            <Navigation navItems={navItems}/>
        </SidebarStyled>
    );
};

export default Sidebar;
