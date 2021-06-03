import styled from 'styled-components';
import CardControler from './CardControler';

const BaseImage = ({ roomImages }) => {
  return (
    <BaseImageStyle>
      <CardControler />
    </BaseImageStyle>
  );
};

export default BaseImage;

const BaseImageStyle = styled.div`
  position: relative;
`;
