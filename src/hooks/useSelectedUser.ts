import {useDispatch, useSelector} from 'react-redux';
import {clearUser, setUser} from '../redux/slices/userSlice';
import {User} from '../types/User';
import {AppState} from '../redux/store';

const useSelectedUser = () => {
  const {user} = useSelector((state: AppState) => state.user);
  const dispatch = useDispatch();

  const setNewUser = (newUser: User) => dispatch(setUser({user: newUser}));

  const clearSavedUser = () => dispatch(clearUser());

  return {
    user,
    setNewUser,
    clearSavedUser,
  };
};

export default useSelectedUser;
