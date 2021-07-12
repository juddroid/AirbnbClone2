import styled from 'styled-components';
import { LANGUAGE } from '../../../../const';

const LanguageText = () => {
  return <LanguageTextStyle>{LANGUAGE}</LanguageTextStyle>;
};

export default LanguageText;

const LanguageTextStyle = styled.span`
  font-weight: 400;
  text-decoration: underline;
`;
