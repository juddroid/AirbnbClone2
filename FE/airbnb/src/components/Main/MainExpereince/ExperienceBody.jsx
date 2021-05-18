import styled from 'styled-components';
import { SECTION_EXPERIENCE_DATA } from '../../../const';
import { v4 as uuidv4 } from 'uuid';
import ExperienceInfo from './ExperienceInfo/ExperienceInfo';

const ExperienceBody = () => {
  return (
    <ExperienceBodyStyle>
      <ExperienceInfoUl>
        {SECTION_EXPERIENCE_DATA.map((data) => (
          <ExperienceInfo data={data.data} key={uuidv4()} />
        ))}
      </ExperienceInfoUl>
    </ExperienceBodyStyle>
  );
};

export default ExperienceBody;

const ExperienceBodyStyle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  position: relative;
  z-index: 0;
`;

const ExperienceInfoUl = styled.ul`
  margin-left: -5px;
  margin-right: -5px;
  display: flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  scroll-snap-type: x mandatory;
`;
