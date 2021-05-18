import styled from 'styled-components';
import SectionInfoText from '../../Section/SectionTextBox';
import ExperienceInfoImg from './ExperienceInfoImg';

const ExperienceInfo = ({ data }) => {
  return (
    <ExperienceInfoStyle>
      <ExperienceInfoBox>
        <ExperienceOuterBox>
          <ExperienceAnchor href={data.link} target="blank">
            <ExperienceInnerBox>
              <ExperienceInfoImg img={data.img} />
              <SectionInfoText txt={data} />
            </ExperienceInnerBox>
          </ExperienceAnchor>
        </ExperienceOuterBox>
      </ExperienceInfoBox>
    </ExperienceInfoStyle>
  );
};

export default ExperienceInfo;

const ExperienceInfoStyle = styled.li`
  border-width: 0px 5px;
  max-width: 33.3333%;
  flex: 0 0 33.3333%;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
`;

const ExperienceInfoBox = styled.div`
  height: 100%;
  min-width: 100%;
  display: flex;
`;

const ExperienceOuterBox = styled.div`
  width: 100%;
  margin-right: 6px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const ExperienceAnchor = styled.a`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  border-radius: 0px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

const ExperienceInnerBox = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 272px;
  height: 100%;

  @media (min-width: 744px) {
    width: 100%;
  }
`;
