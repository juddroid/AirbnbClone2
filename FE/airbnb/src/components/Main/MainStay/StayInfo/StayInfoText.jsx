import styled from 'styled-components';

const StayInfoText = () => {
  return (
    <StayInfoTextStyle>
      <StayInfoTextWrapper>
        <TextBox>StayInfo</TextBox>
      </StayInfoTextWrapper>
    </StayInfoTextStyle>
  );
};

export default StayInfoText;

const StayInfoTextStyle = styled.div`
  padding-top: 8px;
`;

const StayInfoTextWrapper = styled.div`
  white-space: normal;
`;

const TextBox = styled.div`
  font-size: 18px;
  line-height: 22px;
  max-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(34, 34, 34);
  font-weight: 500;
  white-space: pre-line;
`;
