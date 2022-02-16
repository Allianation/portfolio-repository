import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import l10n from '../data/About';
import Card from './Card';
import Title from './Title';

const SkillsStyled = styled.div`
    margin-top: 5rem;
    .skills {
        margin-top: 5rem;
    }
    .rec.rec-arrow:hover {
        background:#057FFF;
    }
    .rec.rec-dot_active {
        background:#057FFF;
        box-shadow:none;
    }
`;

const Skills= () => {
    const lang = 'en';

    const carouselRef = React.useRef(null);
    
    const skillList = l10n['skills'][lang].map((skill, index) =>
        <Card key={index}
            image={skill.image} 
            title={skill.title} 
            paragraph={skill.paragraph}
        />
    );

    return (
        <SkillsStyled>
            <Title title={'Skills'} span={'Skills'} />
            <div className="skills">
                <Carousel 
                    ref={carouselRef}
                    enableAutoPlay 
                    autoPlaySpeed={1500} 
                    itemsToShow={3} 
                    onChange={(currentItem) => {
                        if(currentItem.index === 3) {
                            setTimeout(() => {
                                carouselRef.current.goTo(0);
                            }, 1500); 
                        }
                    }}   
                >
                    {skillList}
                </Carousel>
            </div>
        </SkillsStyled>
    );
};

export default Skills;