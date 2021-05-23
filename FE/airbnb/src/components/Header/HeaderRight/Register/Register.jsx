import styled from 'styled-components';
import RegisterBottom from './RegisterBottom';
import RegisterLogin from './RegisterLogin';
import RegisterForm from './RegisterForm';
import RegisterLine from './RegisterLine';
import { useRecoilValue } from 'recoil';
import { registerPopupState } from '../../../../Recoil/HeaderFieldsetState';
import { BLOCK, HELP, HOSTING, NONE, TO_BE_HOST } from '../../../../const';

const Register = () => {
  const registerState = useRecoilValue(registerPopupState);

  return (
    <RegisterStyle {...{ registerState }}>
      <RegisterForm />
      <RegisterLogin />
      <RegisterLine />
      <RegisterBottom text={TO_BE_HOST} />
      <RegisterBottom text={HOSTING} />
      <RegisterBottom text={HELP} />
    </RegisterStyle>
  );
};

export default Register;

const RegisterStyle = styled.div`
  background: rgb(255, 255, 255);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 12%) 0px 2px 16px;
  color: rgb(34, 34, 34);
  margin-top: 34px;
  padding: 8px 0px;
  position: absolute;
  top: 50%;
  right: 0px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  z-index: 2;
  min-width: 240px;
  display: ${({ registerState }) => (registerState ? BLOCK : NONE)};
`;
