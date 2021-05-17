import styled from 'styled-components';
import Globe from './Globe';
import Host from './Host';

const NavHostGlobe = () => {
  return (
    <NavHostGlobeStyle>
      <Host />
      <Globe />
    </NavHostGlobeStyle>
  );
};

export default NavHostGlobe;

const NavHostGlobeStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 8px;
`;
