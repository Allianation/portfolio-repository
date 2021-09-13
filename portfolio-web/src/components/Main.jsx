/* eslint-disable react/prop-types */
import styled from 'styled-components';

const MainStyled = styled.div`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width:1200px) {
        margin-left: 0;
    }
    .lines {
        position: absolute;
        min-height: 100%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        opacity: 0.4;
        z-index: -1; 
        .line-1, .line-2, .line-3, .line-4 {
            width: 1px;
            min-height: 100vh;
            background-color: var(--border-color);
        }
    }
    
`;

const Main = (props) => {
    return (
        <MainStyled>
            {props.children}
        </MainStyled>
    );
};

export default Main;
