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

const FieldsetStyle = styled.fieldset``;

const FieldsetWrapper = styled.div`
  display: flex;
`;
