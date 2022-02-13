import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: var(--background-dark-grey);
    display: flex;
    align-items: center;
    &:not(:last-child) {
        margin-bottom: 2.5rem;
    }
    .left-content {
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.5rem;
        svg {
            font-size: 2.3rem;
        }
    }
    .right-content {
        h6 {
            color: var(--white-color);
            font-size: 1.2rem;
            padding-bottom: .6rem;
        }
        p {
            padding: .1rem 0;
        }
    }
`;

const Item = (props) => {
    const { 
        icon,
        title,
        cont1,
        cont2,
    } = props;
    return (
        <ItemStyled>
            <div className="left-content">
                {icon}
            </div>
            <div className="right-content">
                <h6>{title}</h6>
                <p>{cont1}</p>
                <p>{cont2}</p>
            </div>
        </ItemStyled>
    );
};

Item.propTypes = {
    icon: PropTypes.shape({}), 
    title: PropTypes.string.isRequired, 
    cont1: PropTypes.string.isRequired, 
    cont2: PropTypes.string.isRequired, 
};

export default Item;
