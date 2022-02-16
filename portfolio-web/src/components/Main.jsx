import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
    position: relative;
    margin-left: 16.3rem;
    min-height: 100vh;
    @media screen and (max-width:1200px) {
        margin-left: 0;
    }
`;

const Main = (props) => {
    const { 
        component: ReceivedComponent,
    } = props;

    const [theme, setTheme] = useState('dark-theme');
    const [checked, setChecked] = useState(false);
    
    useEffect(()=> {
        document.documentElement.className = theme;
    }, [theme]);

    const themeToggler = () => {
        if(theme === 'light-theme') {
            setTheme('dark-theme');
            setChecked(false);
        } else {
            setTheme('light-theme');
            setChecked(true);
        }
    };

    return (
        <MainStyled>

            <div className="theme">
                <div className="light-dark-mode">
                    <div className="left-content">
                        <Brightness4Icon />
                    </div>
                    <div className="right-content">
                        <Switch
                            value=""
                            checked={checked}
                            inputProps={{ 'aria-label': '' }}
                            size="medium"
                            onClick={themeToggler}
                        />
                    </div>
                </div>
            </div>

            <ReceivedComponent/>
        </MainStyled>
    );
};

Main.propTypes = {
    component: PropTypes.func.isRequired
};

export default Main;
