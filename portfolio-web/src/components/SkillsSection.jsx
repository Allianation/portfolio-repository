import styled from 'styled-components';
import AngularLogo from '../img/angular-logo96.svg';
import ReactLogo from '../img/react-logo96.svg';
import VueLogo from '../img/vue-logo96.svg';
import Card from './Card';
import Title from './Title';
import Carousel from 'react-elastic-carousel';

const SkillSectionStyled = styled.div`
    margin-top: 5rem;
    .skills {
        margin-top: 5rem;
    }
`;

const SkillSection = () => {
    return (
        <SkillSectionStyled>
            <Title title={'Skills'} span={'Skills'} />
            <div className="skills">
                <Carousel enableAutoPlay autoPlaySpeed={1500} itemsToShow={3} itemsToScroll={1}>
                    <Card 
                        image={ReactLogo} 
                        title={'React JS'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <Card 
                        image={AngularLogo} 
                        title={'Angular'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <Card 
                        image={VueLogo} 
                        title={'Vue JS'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <Card 
                        image={ReactLogo} 
                        title={'React JS'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <Card 
                        image={AngularLogo} 
                        title={'Angular'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                    <Card 
                        image={VueLogo} 
                        title={'Vue JS'} 
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod.'}
                    />
                </Carousel>
            </div>
        </SkillSectionStyled>
    );
};

export default SkillSection;
