import styled from 'styled-components';
import StayInfoImg from './StayInfoImg';
import StayInfoText from './StayInfoText';

const StayInfo = () => {
  return (
    <StayInfoStyle>
      <StayInfoBox>
        <StayInfoOuterBox>
          <StayInfoAnchor>
            <StayInfoInnerBox>
              <StayInfoImg />
              <StayInfoText />
            </StayInfoInnerBox>
          </StayInfoAnchor>
        </StayInfoOuterBox>
      </StayInfoBox>
    </StayInfoStyle>
  );
};

export default StayInfo;

const StayInfoStyle = styled.li`
  border-width: 0px 5px;
  max-width: 25%;
  flex: 0 0 25%;
  border-style: solid;
  border-color: transparent;
  scroll-snap-align: start;
  scroll-snap-stop: always;
  display: flex;
`;

const StayInfoBox = styled.div`
  height: 100%;
  min-width: 100%;
  display: flex;
`;

const StayInfoOuterBox = styled.div`
  width: 100%;
  margin-right: 6px;
  margin-top: 4px;
  margin-bottom: 8px;
`;

const StayInfoAnchor = styled.a`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  font-weight: inherit;
  border-radius: 0px;
  outline: none;
  transition: box-shadow 0.2s ease 0s, -ms-transform 0.1s ease 0s,
    -webkit-transform 0.1s ease 0s, transform 0.1s ease 0s;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 0px;
  text-align: inherit;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

const StayInfoInnerBox = styled.div`
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  width: 272px;
  height: 100%;

  @media ${({ theme }) => theme.M} {
    width: 100%;
  }
`;
