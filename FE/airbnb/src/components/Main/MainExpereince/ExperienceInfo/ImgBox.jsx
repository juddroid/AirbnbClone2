import styled from 'styled-components';

const ImgBox = ({ img }) => {
  return (
    <ImgBoxStyle>
      <ImgDiv {...{ img }} />
    </ImgBoxStyle>
  );
};

export default ImgBox;

const ImgBoxStyle = styled.div`
  position: absolute;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgDiv = styled.div`
  background-size: cover;
  display: inline-block;
  vertical-align: bottom;
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0px;
  background-position: 50% 50%;
  background-repeat: no-repeat;

  @media (min-width: 743) {
    ${({ img }) => `background-image: url(${img}?im_w=720)`}
  }
  @media (min-width: 950px) {
    ${({ img }) => `background-image: url(${img}?im_w=480)`}
  }
  @media (min-width: 1128px) {
    ${({ img }) => `background-image: url(${img}?im_w=720)`}
  }
  @media (min-width: 1440px) {
    ${({ img }) => `background-image: url(${img}?im_w=1200)`}
  }
`;
