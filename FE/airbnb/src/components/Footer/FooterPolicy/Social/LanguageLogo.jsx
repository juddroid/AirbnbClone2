import styled from 'styled-components';
import GlobeLogo from '../../../../svg/GlobeLogo';

const LanguageLogo = () => {
  return (
    <LanguageLogoStyle>
      <GlobeLogo />
    </LanguageLogoStyle>
  );
};

export default LanguageLogo;

const LanguageLogoStyle = styled.span`
  margin-right: 8px;
`;
