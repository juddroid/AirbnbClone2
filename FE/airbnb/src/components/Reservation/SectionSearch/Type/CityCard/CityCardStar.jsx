import styled from 'styled-components';
import StarLogo from '../../../../../svg/StarLogo';

const CityCardStar = () => {
  return (
    <CityCardStarStyle>
      <CityCardStarWrapper>
        <SpanBox>
          <StarLogo />
          <StarScore>4.99</StarScore>
          <Review>&nbsp;(후기 142개)</Review>
        </SpanBox>
      </CityCardStarWrapper>
    </CityCardStarStyle>
  );
};

export default CityCardStar;

const CityCardStarStyle = styled.div`
  margin-bottom: 6px;

  font-size: 14px;
  line-height: 18px;
  align-items: center;
  display: flex;
  width: 100%;
`;

const CityCardStarWrapper = styled.div`
  margin-right: 10px;
  animation-duration: 0.3s;
  animation-name: keyframe_18jn58a;
  animation-timing-function: ease-in-out;
  opacity: 1;
`;

const SpanBox = styled.span`
  align-items: center;
  display: flex;
  font-size: 14px;
  line-height: 18px;
`;

const StarScore = styled.span`
  color: rgb(34, 34, 34);
`;

const Review = styled.span`
  color: rgb(113, 113, 113);
`;
