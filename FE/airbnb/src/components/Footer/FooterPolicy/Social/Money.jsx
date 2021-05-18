import styled from 'styled-components';
import { MONEY_TEXT, MONEY_UNIT } from '../../../../const';
import { FooterAnchor } from '../../../style/CommonStyles';

const Money = () => {
  return (
    <MoneyStyle>
      <MoneyAnchor>
        <MoneyUnit>{MONEY_UNIT}</MoneyUnit>
        <MoneyUnitText>{MONEY_TEXT}</MoneyUnitText>
      </MoneyAnchor>
    </MoneyStyle>
  );
};

export default Money;

const MoneyStyle = styled.span`
  margin-right: 24px;
`;

const MoneyAnchor = styled(FooterAnchor)`
  display: flex;
  white-space: nowrap;
  text-decoration: none;
`;

const MoneyUnit = styled.span`
  margin-right: 8px;
`;

const MoneyUnitText = styled.span`
  font-weight: 500;
  text-decoration: underline;
`;
