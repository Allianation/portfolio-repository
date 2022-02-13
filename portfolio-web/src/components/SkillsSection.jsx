import styled from 'styled-components';
import Title from './Title';
import SkillCard from './SkillCard';
import ReactLogo from '../img/react-logo96.svg';
import AngularLogo from '../img/angular-logo96.svg';
import VueLogo from '../img/vue-logo96.svg';

const SkillSectionStyled = styled.section`
    margin-top: 5rem;
    .skills {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px) {
            flex-direction: column;
        }
        @media screen and (max-width:950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px) {
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

const SkillSection = () => {
    return (
        <SkillSectionStyled>
            <Title title={'Skills'} span={'skills'} />
            <div className="skills">
                <SkillCard 
                    image={ReactLogo} 
                    title={'Web Design'} 
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                />
                <div className="mid-card">
                    <SkillCard 
                        image={AngularLogo} 
                        title={'Artificial Intelligence'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </div>
                <SkillCard 
                    image={VueLogo} 
                    title={'Game Development'} 
                    paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                />
            </div>
        </SkillSectionStyled>
    );
};

export default SkillSection;
