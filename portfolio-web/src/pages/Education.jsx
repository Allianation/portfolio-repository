import SchoolIcon from '@material-ui/icons/School';
import styled from 'styled-components';
import Item from '../components/Item';
import SmallTitle from '../components/SmallTitle';
import Title from '../components/Title';
import l10n from '../data/Experience';

const EducationStyled = styled.section`
    padding: 3rem;
    .small-title {
        margin-top: 5rem;
        padding-bottom: 3rem;
    }
    .small-title-margin {
        margin-top: 4rem;
    }
    .education-content {
        border-left: 2px solid var(--border-color);
    }
`;

const Education = () => {
    const school = <SchoolIcon />;
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
        <EducationStyled>
            <Title title={'Education'} span={'Education'} />
            <div className="small-title small-title-margin">
                <SmallTitle icon={school} title={'Educational Qualifications'} />
            </div>
            <div className="education-content">
                {listItems}
            </div>
        </EducationStyled>
    );
};

export default Education;
