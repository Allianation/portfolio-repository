import GithubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import styled from 'styled-components';

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
`;

const Home = () => {
    return (
        <HomeStyled>
            <div className="typography">
                <h1>Hi, I&apos;m <span>Lorem Ipsum</span></h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Atque nihil voluptates ea dolore vel 
                    repellat? Quia tenetur non quam exercitationem. Lorem ipsum dolor sit amet.
                </p>
                <div className="icons">
                    <a href="https://codepen.io/pen/" className="icon i-telegram">
                        <TelegramIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
        </HomeStyled>
    );
};

export default Home;
