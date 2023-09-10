import { UserContainer, UserName, ButtonLogOut } from './UserMenu.styled';
import { FaUserAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import authSelectors from '../../redux/auth/authSelectors';

export const UserMenu = () => {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <UserContainer>
      <FaUserAlt />
      <UserName>Welcome, {userName}</UserName>
      <ButtonLogOut
        onClick={() => dispatch(authOperations.logOut())}
        type="button"
      >
        Logout
      </ButtonLogOut>
    </UserContainer>
  );
};
