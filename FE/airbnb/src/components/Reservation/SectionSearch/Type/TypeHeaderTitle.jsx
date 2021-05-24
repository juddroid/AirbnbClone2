import styled from 'styled-components';

const TypeHeaderTitle = () => {
  return <TypeHeaderTitleStyle>TypeHeaderTitle</TypeHeaderTitleStyle>;
};

export default TypeHeaderTitle;

const TypeHeaderTitleStyle = styled.div`
  padding-top: 32px;

  @media (min-width: 744px) {
    padding-top: 50px;
  }
`;
