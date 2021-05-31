import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { guestField } from '../../../../../Recoil/HeaderFieldsetState';
import DeleteButtonIcon from '../../../../../svg/DeleteButtonIcon';

const GuestDeleteButton = () => {
  const [guestFieldState, setGuestFieldState] = useRecoilState(guestField);

  const handleClickDeleteButton = (e) => {
    e.stopPropagation();
    setGuestFieldState({
      ...guestFieldState,
      value: guestFieldState.value.map(
        (guest) => (guest = { ...guest, count: 0 })
      ),
      state: false,
    });
  };

  return (
    <GuestDeleteButtonStyle onClick={handleClickDeleteButton}>
      <GuestDeleteButtonBox>
        <GuestOutDelButton>
          <GuestDelButtonIconSpan>
            <DeleteButtonIcon />
          </GuestDelButtonIconSpan>
        </GuestOutDelButton>
      </GuestDeleteButtonBox>
    </GuestDeleteButtonStyle>
  );
};

export default GuestDeleteButton;

const GuestDeleteButtonStyle = styled.div`
  flex: 0 0 0%;
  position: relative;
  z-index: 5;
`;

const GuestDeleteButtonBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 24px;
`;

const GuestOutDelButton = styled.button`
  appearance: none;
  display: inline-block;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 0px;
  padding: 0px;
  color: rgb(34, 34, 34);
  cursor: pointer;
  touch-action: manipulation;
  position: relative;
  background: transparent;
  transition: transform 0.25s ease 0s;

  ::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgb(235, 235, 235);
  }

  :hover {
    color: rgb(0, 0, 0);
  }

  :hover::before {
    background: rgb(221, 221, 221);
  }
`;

const GuestDelButtonIconSpan = styled.span`
  position: relative;
`;
