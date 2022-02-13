import styled from 'styled-components';
import PropTypes from 'prop-types';

const TitleStyled = styled.div`
    position: relative;
    h2 {
        color: var(--white-color);
        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px) {
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px) {
            font-size: 2rem;
        }
        span {
            font-weight: 900;
            color: rgba(25,29,43,.44);
            font-size: 5rem;
            position: absolute;
            left: 0;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px) {
                font-size: 4rem;
            }
            @media screen and (max-width: 496px) {
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                font-size: 2rem;
            }
        }
    }
`;

const Title = (props) => {
    const { 
        span,
        title,
    } = props;

    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    );
};

Title.propTypes = {
    span: PropTypes.node.isRequired, 
    title: PropTypes.string.isRequired, 
};


export default Title;
