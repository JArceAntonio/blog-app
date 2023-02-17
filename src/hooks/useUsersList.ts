import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {useGetUsersQuery} from '../redux/api/jsonApi';
import {User} from '../types/User';
import useSelectedUser from './useSelectedUser';

const useUsersList = () => {
  const {data: users, isLoading, refetch, isFetching} = useGetUsersQuery();
  const navigation = useNavigation();
  const {setNewUser} = useSelectedUser();
  const [searchEmail, setSearchEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const onSelectUser = (user: User) => () => {
    setNewUser(user);
    setModalOpen(true);
  };

  const goPostsPage = () => navigation.navigate('posts');

  const closeModal = () => setModalOpen(false);

  const filteredUsers = isLoading
    ? []
    : !searchEmail.trim()
    ? users
    : users?.filter(user =>
        user.email
          .trim()
          .toLowerCase()
          .includes(searchEmail.trim().toLowerCase()),
      );

  return {
    users,
    isLoading,
    filteredUsers,
    searchEmail,
    setSearchEmail,
    onSelectUser,
    refetch,
    isFetching,
    closeModal,
    goPostsPage,
    modalOpen,
  };
};

export default useUsersList;
