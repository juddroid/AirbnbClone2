import styled from 'styled-components';

const ModalBottom = () => {
  return (
    <ModalBottomStyle>
      <ReservationButtonStyle>
        <SpanButtonBox>
          <SpanButton>
            <span>{`예약하기`}</span>
          </SpanButton>
        </SpanButtonBox>
      </ReservationButtonStyle>
    </ModalBottomStyle>
  );
};

export default ModalBottom;

const ModalBottomStyle = styled.div`
  flex-shrink: 0;
`;

const ReservationButtonStyle = styled.button`
  background: linear-gradient(to right, #e61e4d 0%, #e31c5f 50%, #d70466 100%);

  cursor: pointer;
  display: inline-block;
  margin: 0px;
  position: relative;
  text-align: center;
  text-decoration: none;
  touch-action: manipulation;

  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  border-radius: 8px;
  outline: none;
  padding: 14px 24px;
  transition: box-shadow 0.2s ease 0s, transform 0.1s ease 0s;
  border: none;
  background: linear-gradient(
    to right,
    rgb(230, 30, 77) 0%,
    rgb(227, 28, 95) 50%,
    rgb(215, 4, 102) 100%
  );
  color: rgb(255, 255, 255);
  width: 100%;
`;

const SpanButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const SpanButton = styled.div`
  position: relative;
  pointer-events: none;
`;
