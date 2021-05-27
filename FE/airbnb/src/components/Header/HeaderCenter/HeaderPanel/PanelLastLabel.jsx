import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { guestField } from '../../../../Recoil/HeaderFieldsetState';

const PanelLastLabel = ({ name }) => {
  const guestFieldData = useRecoilValue(guestField);
  const [fieldState, setFieldState] = useState(false);

  const guestInfo = `게스트 ${
    guestFieldData.value[0].count + guestFieldData.value[1].count
  }명`;
  const infantInfo =
    guestFieldData.value[2].count !== 0
      ? `, 유아 ${guestFieldData.value[2].count}명`
      : ``;
  const field = guestInfo + infantInfo;

  useEffect(() => {
    guestFieldData.value.filter((guest) => guest.count !== 0).length !== 0
      ? setFieldState(true)
      : setFieldState(false);
  }, [guestFieldData]);

  return (
    <PanelMenuLabelStyle>
      <PanelMenuDiv>{name}</PanelMenuDiv>
      <PanelMenuInput {...{ fieldState }}>
        {guestFieldData.value[0].count === 0 ? guestFieldData.initValue : field}
      </PanelMenuInput>
    </PanelMenuLabelStyle>
  );
};

export default PanelLastLabel;

const PanelMenuLabelStyle = styled.div`
  padding: 14px 24px;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  width: 100%;
  z-index: 1;
`;
const PanelMenuDiv = styled.div`
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 12px;
  line-height: 16px;
  padding-bottom: 2px;
`;

const PanelMenuInput = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: ${({ fieldState }) => (fieldState ? `#222` : `#717171`)};
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;
