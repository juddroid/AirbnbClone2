import { useEffect, useState } from 'react';
import qs from 'qs';

const Callback = ({ location, history }) => {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [USER_ID, setUSER_ID] = useState(null);
  const [isShowModal, setIsShowModal] = useState(false);
  console.log(window);
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      if (!code) return;
      console.log(code);
      try {
        const res = await fetch(
          `http://travel.airbnb.kro.kr/api/auth/social/callback/github`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: code }),
          }
        );
        console.log(res);
        const { access_token, login } = await res.json();
        localStorage.setItem('access_token', access_token);

        setUSER_ID(login);
        setIsLoggedIn(true);
      } catch (error) {
        console.error(error);
      }
    };
    getToken();

    const homePage = 'http://localhost:3000';
    window.history.pushState(null, null, homePage);
  }, [location, history]);

  return <div>Callback</div>;
};

export default Callback;
