import styled from 'styled-components';

const CityInfoImg = () => {
  return <CityInfoImgSpan>Img</CityInfoImgSpan>;
};

export default CityInfoImg;

const CityInfoImgSpan = styled.span`
  position: relative;
  background-color: rgb(221, 221, 221);
  overflow: hidden;
  border-radius: 12px;
  flex: 0 0 72px;
  height: 72px;
  margin-right: 12px;

  @media ${({ theme }) => theme.M} {
    margin-right: 16px;
  }

  @media ${({ theme }) => theme.XL} {
    flex: 0 0 64px;
    height: 64px;
    border-radius: 8px;
  }
`;
