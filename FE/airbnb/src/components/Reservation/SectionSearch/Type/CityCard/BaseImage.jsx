import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import CardControler from './CardControler';

const BaseImage = () => {
  return (
    <BaseImageStyle>
      <BackgroundImage />
      <CardControler />
    </BaseImageStyle>
  );
};

export default BaseImage;

const BaseImageStyle = styled.div`
  position: relative;
`;
