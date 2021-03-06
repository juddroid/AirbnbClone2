import styled from 'styled-components';
import ImgBox from '../../MainExpereince/ExperienceInfo/ImgBox';

const StayInfoImg = ({ img }) => {
  return (
    <StayInfoImgStyle>
      <StayInfoImgWrapper>
        <ImgBox {...{ img }} />
      </StayInfoImgWrapper>
    </StayInfoImgStyle>
  );
};

export default StayInfoImg;

const StayInfoImgStyle = styled.div`
  background: rgb(221, 221, 221);
  overflow: hidden;
  position: relative;
  border-radius: 8px;
`;

const StayInfoImgWrapper = styled.div`
  padding-top: 100%;
  position: relative;
  flex: 1 1 0%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
`;
