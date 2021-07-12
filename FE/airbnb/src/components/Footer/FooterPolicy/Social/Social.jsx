import styled from 'styled-components';
import Nation from './Nation';
import SocialMedia from './SocialMedia';

const Social = () => {
  return (
    <SocialStyle>
      <Nation />
      <SocialMedia />
    </SocialStyle>
  );
};

export default Social;

const SocialStyle = styled.div`
  display: flex;
  margin-bottom: 16px;

  @media (min-width: 1128px) {
    margin-bottom: 0px;
  }
`;
