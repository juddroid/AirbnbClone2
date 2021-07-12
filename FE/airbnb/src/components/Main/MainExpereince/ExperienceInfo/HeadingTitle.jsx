import styled from 'styled-components';
import { SECTION_EXPERIENCE_TITLE } from '../../../../const';

const HeadingTitle = () => {
  return <HeadingTitleStyle>{SECTION_EXPERIENCE_TITLE}</HeadingTitleStyle>;
};

export default HeadingTitle;

const HeadingTitleStyle = styled.div`
  white-space: pre-line;
  max-width: 100%;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  color: #222;
`;
