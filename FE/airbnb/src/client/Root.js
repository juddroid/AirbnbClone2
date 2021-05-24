import { BrowserRouter } from 'react-router-dom';
import App from '../shared/App';
import { RecoilRoot } from 'recoil';

const Root = () => (
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);

export default Root;
