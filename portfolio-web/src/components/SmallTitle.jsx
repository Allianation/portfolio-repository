import styled from 'styled-components';
import PropTypes from 'prop-types';

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p {
        padding-right: 1rem;
        svg {
            font-size: 3rem;
        }
    }
    h3 {
        color: var(--white-color);
        font-size: 2rem;
    }
`;

const SmallTitle = (props) => {
    const { 
        icon,
        title,
    } = props;

    return (
        <SmallTitleStyled>
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled>
    );
};

SmallTitle.propTypes = {
    icon: PropTypes.node.isRequired, 
    title: PropTypes.string.isRequired, 
};


export default SmallTitle;
