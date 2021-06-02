import styled from 'styled-components';
import BackgroundImage from './BackgroundImage';
import CardControler from './CardControler';

const BaseImage = ({ roomImages }) => {
  return (
    <BaseImageStyle>
      <BackgroundImage {...{ roomImages }} />
      <CardControler />
    </BaseImageStyle>
  );
};

export default BaseImage;

const BaseImageStyle = styled.div`
  position: relative;
`;
