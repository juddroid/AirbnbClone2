import styled from 'styled-components';
import { SECTION_EXPERIENCE_SUBTITLE } from '../../../../const';

const HeadingSubTitle = () => {
  return (
    <HeadingSubTitleStyle>{SECTION_EXPERIENCE_SUBTITLE}</HeadingSubTitleStyle>
  );
};

export default HeadingSubTitle;

const HeadingSubTitleStyle = styled.div`
  white-space: pre-line;
  max-width: 100%;
  font-size: 23px;
  font-weight: 400;
  color: #222;
  overflow: hidden;
  text-overflow: ellipsis;
`;
