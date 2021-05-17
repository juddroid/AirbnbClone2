import styled from 'styled-components';
import { EXPERIENCE, ONLINE, STAYS } from '../../../const';
import FieldsetDiv from './FieldsetDiv';
import FieldsetLabel from './FieldsetLabel';

const Fieldset = () => {
  return (
    <FieldsetStyle>
      <FieldsetWrapper role="tablist" aria-label="무엇을 찾고 계신가요?">
        <FieldsetLabel for="search-block-tab-false-STAYS" dataText={STAYS} />
        <FieldsetLabel
          for="search-block-tab-false-EXPERIENCES"
          dataText={EXPERIENCE}
        />
        <FieldsetDiv dataText={ONLINE} />
      </FieldsetWrapper>
    </FieldsetStyle>
  );
};

export default Fieldset;

const FieldsetStyle = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
`;

const FieldsetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
`;
