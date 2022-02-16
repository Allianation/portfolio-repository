import styled from 'styled-components';
import l10n from '../data/About';
import about from '../img/about.jpg';
import PrimaryButton from './PrimaryButton';

const InformationStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px) {
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content {
        width: 100%;
        img {
            width: 95%;
            height:100%;
            object-fit: cover;
            opacity: 0.8;
        }
    }
    .right-content {
        width: 100%;
        h4 {
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph {
            padding: 1rem 0;
        }
        .about-info {
            display: flex;
            padding-bottom: 1.4rem;
            .info-title {
                padding-right: 3rem;
                p {
                    font-weight: 600;
                }
            }
            .info-title, .info {
                p {
                    padding: .3rem 0;
                }
            }
        }
    }
`;

const Information = () => {
    const lang = 'en';

    const infoTitleList = l10n['infoTitle'][lang].map((infloTitle, index) =>
        <p key={index}>{infloTitle}</p>
    );

    const infoList = l10n['info'][lang].map((info, index) =>
        <p key={index}>{info}</p>
    );
    
    return (
        <InformationStyled>
            <div className="left-content">
                <img src={about} alt=""/>
            </div>
            <div className="right-content">
                <h4>{l10n['title'][lang]} <span>Allianation</span></h4>
                <p className="paragraph">
                    {l10n['paragraph'][lang]}  
                </p>
                <div className="about-info">
                    <div className="info-title">
                        {infoTitleList}
                    </div>
                    <div className="info">
                        {infoList}
                    </div>
                </div>
                <PrimaryButton title={'Download Cv'} />
            </div>
        </InformationStyled>
    );
};

export default Information;
