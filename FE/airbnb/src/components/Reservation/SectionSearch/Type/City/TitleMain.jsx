import styled from 'styled-components';

const TitleMain = () => {
  return (
    <TitleMainStyle>
      <TitleMainBox>
        <h3>City</h3>
      </TitleMainBox>
    </TitleMainStyle>
  );
};

export default TitleMain;

const TitleMainStyle = styled.div`
  margin-right: 24px;
  width: auto;
`;

const TitleMainBox = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 400;

  h3 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 500;
  }
`;
