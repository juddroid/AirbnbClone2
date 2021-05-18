import styled from 'styled-components';

const SectionInfoText = ({ txt }) => {
  if (!txt) return null;
  return (
    <SectionInfoTextStyle>
      <SectionInfoTextWrapper>
        <SectionTitleBox>{txt.title}</SectionTitleBox>
        <SectionSubTitleBox>{txt.subTitle}</SectionSubTitleBox>
      </SectionInfoTextWrapper>
    </SectionInfoTextStyle>
  );
};

export default SectionInfoText;

const SectionInfoTextStyle = styled.div`
  padding-top: 8px;
`;

const SectionInfoTextWrapper = styled.div`
  white-space: normal;
`;

const SectionTitleBox = styled.div`
  font-size: 18px;
  line-height: 22px;
  max-height: 44px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(34, 34, 34);
  font-weight: 500;
  white-space: pre-line;
`;

const SectionSubTitleBox = styled.div`
  font-size: 14px;
  line-height: 18px;
  max-height: 54px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(34, 34, 34);
  font-weight: 400;
  margin-top: 4px;
  white-space: pre-line;
`;
