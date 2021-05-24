import styled from 'styled-components';

const BackgroundImage = () => {
  return (
    <BackgroundImageStyle>
      <ImageWrapper>
        <span>
          <ImageData>
            <ImageAnchor />
          </ImageData>
        </span>
        <PaginationBox>
          <DotListBox>
            <DotList>
              <DotBox>
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
                <Dot />
              </DotBox>
            </DotList>
          </DotListBox>
        </PaginationBox>
      </ImageWrapper>
    </BackgroundImageStyle>
  );
};

export default BackgroundImage;

const BackgroundImageStyle = styled.div`
  background: rgb(216, 216, 216);
  --dls-basecard-padding-top: 66.6667%;

  position: relative;
  width: 100%;
  z-index: 0;
  padding-top: var(--dls-basecard-padding-top);
`;

const ImageWrapper = styled.div`
  position: absolute;
  inset: 0px;
  height: 100%;
  width: 100%;
`;

const ImageData = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;

const ImageAnchor = styled.a`
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
`;

const PaginationBox = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  white-space: nowrap;
`;

const DotListBox = styled.div`
  align-items: flex-end;
  display: flex;
  justify-content: center;
  height: 100%;
`;

const DotList = styled.div`
  display: flex;
  overflow: hidden;
  padding-bottom: 12px;
  max-width: 55px;
`;

const DotBox = styled.div`
  transform: translateX(0px);

  align-items: flex-end;
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  transition: transform 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
`;

const Dot = styled.span`
  transform: scale(1);

  background: rgb(255, 255, 255);
  border-radius: 50%;
  height: 6px;
  margin-left: 2.5px;
  margin-right: 2.5px;
  min-width: 6px;
  transition: opacity 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s;
  width: 6px;
  opacity: 1;
`;
