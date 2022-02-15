import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';
import l10n from '../data/Home';

const HomeStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .typography {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        .icons {
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon {
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover {
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child) {
                    margin-right: 1rem;
                }
                svg {
                    margin: .5rem;
                }
            }
            .i-instagram {
                &:hover {
                    border: 2px solid orange;
                    color: orange;
                }
            }
            .i-github {
                &:hover {
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
    .typingClassName {
        font-weight: bold;
        margin-top:15px;
    }
    .typingClassName div{
        font-size 2rem;
        margin-top:15px;
        margin-bottom:15px;
    }
    .typingClassName span{
        font-size 2rem;
        margin-top:15px;
        margin-bottom:15px;
    }
`;

const Home = () => {
    const lang = 'en';

    const typingText = [
        'FRONTEND DEVELOPER',
        'BACKEND DEVELOPER',
        'FREELANCE DEVELOPER',
        'WEB DESIGNER',
    ];

    const linksList = l10n['links'][lang].map((link, index) =>
        <a key={index} href={link.href} className={link.className}>
            {link.icon}
        </a>
    );

    return (
        <HomeStyled>
            <div className="typography">
                <h1>{l10n['text'][lang]} <span>Allianation</span></h1>
               
                <ReactTypingEffect
                    text={typingText}
                    className='typingClassName'
                    speed= {200}
                    eraseSpeed= {200}
                    eraseDelay={1500}
                    typingDelay={1500}
                />
                
                <div className="icons">
                    {linksList}
                </div>
            </div>
        </HomeStyled>
    );
};

export default Home;
