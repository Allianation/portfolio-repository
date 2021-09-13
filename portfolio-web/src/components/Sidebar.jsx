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

const navItems = [
    {name: 'Home', to: '/portfolio-repository/'},
    {name: 'About', to: '/portfolio-repository/about'},
    {name: 'Blog', to: '/portfolio-repository/blog'},
    {name: 'Services', to: '/portfolio-repository/services'},
    {name: 'Contacts', to: '/portfolio-repository/contacts'}
];

const Sidebar = () => {
    return (
        <SidebarStyled>
            <Navigation navItems={navItems}/>
        </SidebarStyled>
    );
};

export default Sidebar;
