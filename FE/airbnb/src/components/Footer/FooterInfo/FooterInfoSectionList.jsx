import styled from 'styled-components';

const FooterInfoSectionList = ({ item }) => {
  return (
    <FooterInfoSectionListStyle>
      <SectionListAnchor>{item}</SectionListAnchor>
    </FooterInfoSectionListStyle>
  );
};

export default FooterInfoSectionList;

const FooterInfoSectionListStyle = styled.li`
  margin-top: 12px;

  @media (min-width: 744px) {
    flex-basis: 33.333333333333336%;
    padding-left: 12px;
    padding-right: 12px;
  }

  @media (min-width: 1128px) {
    margin-top: 16px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const SectionListAnchor = styled.a`
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  font-variant: inherit;
  text-decoration: none;
  color: #222;
  font-size: 14px;
  line-height: 18px;
`;
