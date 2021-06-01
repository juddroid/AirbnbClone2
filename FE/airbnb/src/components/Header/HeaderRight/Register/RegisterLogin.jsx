import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { GITHUB_LOGIN, LOGIN } from '../../../../const';
import { gitHubLogin } from '../../../../Recoil/HeaderFieldsetState';
import GitHubIcon from '@material-ui/icons/GitHub';
import { isLoggedIn, userData } from '../../../../Recoil/LogInState';
import { useEffect, useState } from 'react';

const RegisterLogin = () => {
  const [gitHubLoginState, setGitHubLoginState] = useRecoilState(gitHubLogin);
  const isLogIn = useRecoilValue(isLoggedIn);
  const user = useRecoilValue(userData);
  const [logInText, setLogInText] = useState(LOGIN);

  const handleClickLoginButton = (e) => {
    e.stopPropagation();
    if (gitHubLoginState) {
      return (window.location.href = `${GITHUB_LOGIN}`);
    }
    setGitHubLoginState(true);
  };

  useEffect(() => {
    isLogIn && setLogInText(user.id);
  }, [isLogIn]);
  return (
    <>
      {gitHubLoginState ? (
        <RegisterLoginStyle
          {...{ gitHubLoginState }}
          onClick={handleClickLoginButton}
        >
          <GitHubLoginStyle>
            <div>
              <GitHubIcon />
            </div>
            <div>{`Sign in with GitHub`}</div>
          </GitHubLoginStyle>
        </RegisterLoginStyle>
      ) : (
        <RegisterLoginStyle
          {...{ gitHubLoginState, isLogIn }}
          onClick={handleClickLoginButton}
        >
          <LoginStyle>{logInText}</LoginStyle>
        </RegisterLoginStyle>
      )}
    </>
  );
};

export default RegisterLogin;

const RegisterLoginStyle = styled.div`
  appearance: none;
  background: transparent;
  border: 0px;
  color: #222;
  cursor: pointer;
  display: flex;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  margin: 0px;
  outline: none;
  overflow: visible;
  padding: 12px 16px;
  text-align: inherit;
  text-decoration: none;
  user-select: auto;
  white-space: nowrap;
  width: 100%;
  align-items: center;

  :hover:not(:active) {
    background-color: #f7f7f7;
  }

  ${({ gitHubLoginState, isLogIn }) =>
    !isLogIn &&
    gitHubLoginState &&
    `
    background: #222;
    padding: 9px 16px;

    :hover:not(:active) {
      background-color: #333;
    }
  `};
`;

const LoginStyle = styled.div`
  flex: 1 0 auto;
`;

const GitHubLoginStyle = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 600;
  box-sizing: border-box;

  div {
    display: flex;
    align-items: center;
    padding: 0 5px;
  }
`;
