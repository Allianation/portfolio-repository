import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import styled from 'styled-components';
import Item from '../components/Item';
import SmallTitle from '../components/SmallTitle';
import Title from '../components/Title';
import l10n from '../data/Experience';

const ExperienceStyled = styled.section`
    padding: 3rem;
    .small-title {
        margin-top: 5rem;
        padding-bottom: 3rem;
    }
    .small-title-margin {
        margin-top: 4rem;
    }
    .experience-content {
        border-left: 2px solid var(--border-color);
    }
`;

const Experience = () => {
    const briefcase = <BusinessCenterIcon />;
    const lang = 'en';

    const listItems = l10n['items'][lang].map((expItem, index) =>
        <Item key={index}
            year={expItem.year} 
            title={expItem.title}
            subtitle={expItem.subtitle}
            text={expItem.text} 
        />
    );
   
    return (
        <ExperienceStyled>
            <Title title={'Experience'} span={'Experience'} />
            <div className="small-title small-title-margin">
                <SmallTitle icon={briefcase} title={l10n['title'][lang]} />
            </div>
            <div className="experience-content">
                {listItems}
            </div>
        </ExperienceStyled>
    );
};

export default Experience;
