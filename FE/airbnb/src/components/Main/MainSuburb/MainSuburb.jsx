import styled from 'styled-components';
import { MainSuburbSize } from '../../style/CommonStyles';
import MainSuburbContent from './MainSuburbContent';

const MainSuburb = () => {
  return (
    <MainSuburbStyle>
      <MainSuburbWrapper>
        <MainSuburbContent />
      </MainSuburbWrapper>
    </MainSuburbStyle>
  );
};

export default MainSuburb;

const MainSuburbStyle = styled.div``;

const MainSuburbWrapper = styled(MainSuburbSize)`
  margin-bottom: var(--exp-pdw-sm-bot, 40px);
  margin-top: var(--exp-pdw-sm-top, 0px);
  padding-left: var(--exp-pdw-sm-lead, 0px);
  padding-right: var(--exp-pdw-sm-trail, 0px);
  border: 1px solid red;

  @media ${({ theme }) => theme.M} {
    margin-bottom: var(--exp-pdw-md-bot, 40px);
    margin-top: var(--exp-pdw-md-top, 0px);
    padding-left: var(--exp-pdw-md-lead, 0px);
    padding-right: var(--exp-pdw-md-trail, 0px);
  }

  @media ${({ theme }) => theme.XL} {
    margin-bottom: var(--exp-pdw-lg-bot, 40px);
    margin-top: var(--exp-pdw-lg-top, 0px);
    padding-left: var(--exp-pdw-lg-lead, 0px);
    padding-right: var(--exp-pdw-lg-trail, 0px);
  }
`;
