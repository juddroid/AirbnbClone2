import styled from 'styled-components';
import { SECTION_HOST_DETAIL } from '../../../const';

const HostDetailButton = () => {
  return (
    <HostDetailButtonStyle>
      <DetailButton>{SECTION_HOST_DETAIL}</DetailButton>
    </HostDetailButtonStyle>
  );
};

export default HostDetailButton;

const HostDetailButtonStyle = styled.div`
  margin-top: 16px;

  @media (min-width: 744px) {
    margin-top: 20px;
  }
  @media (min-width: 1128px) {
    margin-top: 40px;
  }
`;

const DetailButton = styled.button`
  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  width: auto;
  touch-action: manipulation;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: normal;
  color: rgb(72, 72, 72);
  padding: 9px 16px;
  border: 0px;
  background: rgb(255, 255, 255);
  border-radius: 8px;

  @media (min-width: 1128px) {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: normal;
    color: rgb(72, 72, 72);
    padding: 14px 24px;
  }
`;
