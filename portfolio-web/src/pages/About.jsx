import styled from 'styled-components';
import Information from '../components/Information';
import Skills from '../components/Skills';
import Title from '../components/Title';

const AboutStyled = styled.section`
    padding: 3rem;
`;

const About = () => {
    return (
        <AboutStyled>
            <Title title={'About Me'} span={'About Me'} />
            <Information />
            <Skills />
        </AboutStyled>
    );
};

export default About;
