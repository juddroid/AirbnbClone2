import styled from 'styled-components';

const Week = ({ week }) => {
  return (
    <WeekStyle>
      <WeekText>{week}</WeekText>
    </WeekStyle>
  );
};

export default Week;

const WeekStyle = styled.li`
  width: 48px;
  display: inline-block;
  text-align: center;
`;

const WeekText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: rgb(165, 165, 165);
  margin-bottom: 6px;
  font-weight: 600;

  @media (min-width: 744px) {
    margin-bottom: 0px;
  }
`;
