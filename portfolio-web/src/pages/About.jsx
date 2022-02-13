import styled from 'styled-components';
import ImageSection from '../components/ImageSection';
import SkillSection from '../components/SkillsSection';
import Title from '../components/Title';

const AboutStyled = styled.section`
    padding: 3rem;
`;

const About = () => {
    return (
        <AboutStyled>
            <Title title={'About Me'} span={'About Me'} />
            <ImageSection />
            <SkillSection />
        </AboutStyled>
    );
};

export default About;
