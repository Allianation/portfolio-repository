import styled from 'styled-components';
import Item from '../components/Item';
import SmallTitle from '../components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import l10n from '../data/Experience';
import Title from '../components/Title';

const ExperienceStyled = styled.section`
    padding: 3rem;
    .small-title {
        margin-top: 5rem;
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
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
            <div className="small-title">
                <SmallTitle icon={briefcase} title={l10n['title'][lang]} />
            </div>
            <div className="resume-content">
                {listItems}
            </div>
        </ExperienceStyled>
    );
};

export default Experience;
