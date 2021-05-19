import styled from 'styled-components';
import { asideInfoMessage, BLANK, asideInfoURL } from '../../const';

const Aside = () => {
  return (
    <AsideStyle>
      <AsideAnchor href={asideInfoURL} target={BLANK}>
        {asideInfoMessage}
      </AsideAnchor>
    </AsideStyle>
  );
};

export default Aside;

const AsideStyle = styled.aside`
  --background-color-hex: #222;
  --text-color-hex: #a3a3a3;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 14px;
  line-height: 18px;
  color: var(--text-color-hex, #222);
  padding-top: 16px;
  padding-bottom: 16px;
  background: var(--background-color-hex, #f7f7f7);
  text-align: center;
  position: relative;

  @media (min-width: 375px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  @media (min-width: 744px) {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  @media (min-width: 950px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  @media (min-width: 1440px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

const AsideAnchor = styled.a`
  --text-hover-color-hex: #a3a3a3cc;

  font-size: 12px;
  line-height: 16px;
  color: inherit;
  display: inline-block;
  font-weight: 600;
  text-decoration: underline;
  white-space: nowrap;

  @media (min-width: 744px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
