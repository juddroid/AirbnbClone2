import styled from 'styled-components';

const GuestWho = ({ header, info }) => {
  return (
    <GuestWhoStyle>
      <GuestHeader>{header}</GuestHeader>
      <GuestInfo>{info}</GuestInfo>
    </GuestWhoStyle>
  );
};

export default GuestWho;

const GuestWhoStyle = styled.div`
  flex-grow: 1;
`;

const GuestHeader = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
`;

const GuestInfo = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: rgb(113, 113, 113);
`;
