import styled from 'styled-components';
import FooterInfoSectionList from './FooterInfoSectionList';

const FooterInfoSection = ({ data }) => {
  return (
    <FooterInfoSectionStyle>
      <SectionTitle>{data.sectionTitle}</SectionTitle>
      <FooterInfoSectionUl>
        {data.sectionList.map((item) => (
          <FooterInfoSectionList {...{ item }} />
        ))}
      </FooterInfoSectionUl>
    </FooterInfoSectionStyle>
  );
};

export default FooterInfoSection;

const FooterInfoSectionStyle = styled.section`
  :not(:last-child) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px solid #ddd;
  }

  @media (min-width: 1128px) {
    flex: 1 0 0%;
    padding-left: 12px;
    padding-right: 12px;

    :not(:last-child) {
      padding-bottom: 0px;
      margin-bottom: 0px;
      border-bottom: 0px;
    }
  }
`;

const SectionTitle = styled.div`
  color: #222;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 0px;
  font-weight: 600;

  :first-child {
    margin-top: 0;
  }
`;

const FooterInfoSectionUl = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 0px;

  @media (min-width: 744px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: -12px;
    margin-right: -12px;
  }

  @media (min-width: 1128px) {
    display: block;
    margin-left: 0px;
    margin-right: 0px;
  }
`;
