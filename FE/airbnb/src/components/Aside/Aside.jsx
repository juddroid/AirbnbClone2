import styled from 'styled-components';
import { asideInfoMessage, asideInfoTarget, asideInfoURL } from '../../const';

const Aside = () => {
  return (
    <AsideStyle>
      <a href={asideInfoURL} target={asideInfoTarget}>
        {asideInfoMessage}
      </a>
    </AsideStyle>
  );
};

export default Aside;

const AsideStyle = styled.div`
  background: #222;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #a3a3a3cc;
    text-decoration: underline;
  }
`;
