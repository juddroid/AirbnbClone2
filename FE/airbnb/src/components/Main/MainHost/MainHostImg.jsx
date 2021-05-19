import styled from 'styled-components';

const MainHostImg = () => {
  return (
    <MainHostImgStyle>
      <MainHostImgWrapper>
        <ImgBox />
      </MainHostImgWrapper>
    </MainHostImgStyle>
  );
};

export default MainHostImg;

const MainHostImgStyle = styled.div`
  position: absolute;
  inset: -1px 0px;
`;

const MainHostImgWrapper = styled.div`
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  min-height: 1px;
`;

const ImgBox = styled.div`
  background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560');
  background-size: cover;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;

  @media (min-width: 743) {
    background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=720');
  }
  @media (min-width: 950px) {
    background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440');
  }
  @media (min-width: 1128px) {
    background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560');
  }
  @media (min-width: 1440px) {
    background-image: url('https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=2560');
  }
`;
