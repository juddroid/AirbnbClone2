import styled from 'styled-components';
import CityButton from './CityButton';

const TitleMore = () => {
  return (
    <TitleMoreStyle>
      <a href="/">보기(300+개)</a>
      <span></span>
      <CityButton />
    </TitleMoreStyle>
  );
};

export default TitleMore;

const TitleMoreStyle = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  a {
    font-size: inherit;
    font-family: inherit;
    font-style: inherit;
    font-variant: inherit;
    line-height: inherit;
    color: rgb(34, 34, 34);
    text-decoration: underline;
    border-radius: 4px;
    font-weight: 400;
    outline: none;
  }

  span {
    display: inline-block;
    height: 32px;
    width: 1px;
    margin-right: 16px;
    padding: 0px;
    border: none;
  }
`;
