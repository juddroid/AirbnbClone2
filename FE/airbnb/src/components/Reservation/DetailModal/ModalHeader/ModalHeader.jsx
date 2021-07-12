import styled from 'styled-components';
import HeaderSub from './HeaderSub';
import HeaderTitle from './HeaderTitle';

const ModalHeader = () => {
  return (
    <ModalHeaderStyle>
      <HeaderTitle />
      <HeaderSub />
    </ModalHeaderStyle>
  );
};

export default ModalHeader;

const ModalHeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 70px;
  margin-bottom: 10px;
`;
