import styled from 'styled-components';
import Item from '../components/Item';
import SmallTitle from '../components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';

const ExperienceStyled = styled.section`
    padding: 3rem;
    .small-title {
        padding-bottom: 3rem;
    }
    .u-small-title-margin {
        margin-top: 4rem;
    }
    .resume-content {
        border-left: 2px solid var(--border-color);
    }
`;

const l10n = {
    'title': {en: 'Working Experience', es: 'Experiencia Laboral'}
};

const expItems = [
    {
        year: '2015 - 2020',
        title: 'Computer Science Teacher',
        subtitle: 'Sussex University',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'
    },
    {
        year: '2015 - Present',
        title: 'Full Stack Developer',
        subtitle: 'Microsoft Studios',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'
    },
    {
        year: '2010 - 2017',
        title: 'User Interface Designer',
        subtitle: 'Google Inc',
        text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero.'
    }
];

const listItems = expItems.map((expItem, index) =>
    <Item key={index}
        year={expItem.year} 
        title={expItem.title}
        subtitle={expItem.subtitle}
        text={expItem.text} 
    />
);

const Experience = () => {
    const briefcase = <BusinessCenterIcon />;
    const lang = 'en';
   
    return (
        <ExperienceStyled>
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
