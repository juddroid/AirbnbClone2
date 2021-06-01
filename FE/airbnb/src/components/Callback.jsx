import { useEffect } from 'react';
import qs from 'qs';

const Callback = ({ location, history }) => {
  useEffect(() => {
    const getToken = async () => {
      const { jwt, profile_url } = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
      });
      if (!jwt) return;

      localStorage.setItem('jwt', jwt);
      localStorage.setItem('profile_url', profile_url);
    };

    getToken();
    console.log('callback');

    const homePage = 'http://localhost:3000';
    window.history.pushState(null, null, homePage);
  }, [location, history]);

  return <div>Callback</div>;
};

export default Callback;
