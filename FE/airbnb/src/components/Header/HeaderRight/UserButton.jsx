import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { registerPopupState } from '../../../Recoil/HeaderFieldsetState';
import UserBurgerLogo from '../../../svg/UserBurgerLogo';
import UserLogo from '../../../svg/UserLogo';

const UserButton = () => {
  const register = useRef();
  const setRegisterState = useSetRecoilState(registerPopupState);

  const handleClickUserButton = (e) => {
    register.current.contains(e.target)
      ? setRegisterState(true)
      : setRegisterState(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickUserButton);

    return () => {
      window.removeEventListener('click', handleClickUserButton);
    };
  }, []);

  return (
    <UserButtonStyle ref={register}>
      <UserBurgerLogo />
      <UserLogo />
    </UserButtonStyle>
  );
};

export default UserButton;

const UserButtonStyle = styled.button`
  appearance: none;
  background: transparent;
  border: 1px solid #ddd;
  color: #222;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 5px 5px 5px 12px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  align-items: center;
  background-color: #fff;
  border-radius: 21px;
  height: 42px;
  position: relative;
  vertical-align: middle;
  transition: box-shadow 0.2s ease;
  z-index: 1;
`;
