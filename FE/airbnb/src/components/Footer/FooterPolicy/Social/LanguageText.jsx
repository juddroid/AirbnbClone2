import styled from 'styled-components';
import { LANGUAGE } from '../../../../const';

const LanguageText = () => {
  return <LanguageTextStyle>{LANGUAGE}</LanguageTextStyle>;
};

export default LanguageText;

const LanguageTextStyle = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;
