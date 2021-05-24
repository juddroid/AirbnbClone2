import styled from 'styled-components';

const TypeHeaderTitle = () => {
  return (
    <TypeHeaderTitleStyle>
      <TypeHeaderTitleUpper>300개 이상의 숙소</TypeHeaderTitleUpper>
      <TypeHeaderTitleBody>
        <h1>근처의 숙소</h1>
      </TypeHeaderTitleBody>
    </TypeHeaderTitleStyle>
  );
};

export default TypeHeaderTitle;

const TypeHeaderTitleStyle = styled.div`
  padding-top: 32px;

  @media (min-width: 744px) {
    padding-top: 50px;
  }
`;

const TypeHeaderTitleUpper = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: rgb(34, 34, 34);
  padding-bottom: 8px;
`;

const TypeHeaderTitleBody = styled.div`
  font-size: 26px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 800;

  @media (min-width: 744px) {
    font-size: 32px;
    line-height: 36px;
  }

  h1 {
    color: inherit;
    font-size: 1em;
    font-weight: inherit;
    line-height: inherit;
    margin: 0px;
    padding: 0px;
  }
`;
