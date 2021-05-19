import styled from 'styled-components';

const Background = () => {
  return <BackgroundStyle />;
};

export default Background;

const BackgroundStyle = styled.div`
  position: absolute;
  z-index: -1;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  background-size: cover;
  background-position: center;
  background-image: url('https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=320');

  @media ${({ theme }) => theme.S} {
    background-image: url('https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=720');
  }
  @media ${({ theme }) => theme.M} {
    background-image: url('https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=1440');
  }
  @media ${({ theme }) => theme.L} {
    background-image: url('https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=1920');
  }
  @media ${({ theme }) => theme.XXL} {
    background-image: url('https://a0.muscache.com/im/pictures/ddc7f01f-3fb3-483c-87e6-701dad52c930.jpg?im_w=2560');
  }
`;
