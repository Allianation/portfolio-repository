import PropTypes from 'prop-types';
import styled from 'styled-components';

const ItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px) {
        p, h5, h6 {
            font-size: 80%;
        }
    }
    &:not(:last-child) {
        padding-bottom: 3rem;
    }
    .left-content {
        width: 50%;
        padding-left: 20px;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: -10px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
        p {
            display: inline-block;
        }
    }
    .right-content {
        padding-left: 5rem;
        position: relative;
        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 15px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        h5 {
            color: var(--primary-color);
            font-size: 2rem;
            padding-bottom: .4rem;
        }
        h6 {
            padding-bottom: .6rem;
            font-size: 1.5rem;
        }
    }
`;

const Item = (props) => {
    const { 
        year,
        title,
        subtitle,
        text,
    } = props;

    return (
        <ItemStyled>
            <div className="left-content">
                <p>{year}</p>
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subtitle}</h6>
                <p>{text}</p>
            </div>
        </ItemStyled>
    );
};

Item.propTypes = {
    year: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    subtitle: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
};

export default Item;
