import styled from 'styled-components';

const Date = ({ date }) => {
  return (
    <DateStyle>
      <DateBox>
        <DateBoxDiv>
          <DateNum>{date}</DateNum>
        </DateBoxDiv>
      </DateBox>
    </DateStyle>
  );
};

export default Date;

const DateStyle = styled.div`
  width: 48px;
  height: 47px;
  background: rgb(247, 247, 247);
  border: 0px;
  padding: 0px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  margin: 1px 0px;
  box-sizing: border-box;
  font-size: 14px;
  text-align: center;
  cursor: default;
`;

const DateBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const DateBoxDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: none;
  border-radius: 100%;
  color: rgb(72, 72, 72);
  opacity: 0.25;
`;

const DateNum = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
`;
