import useSelectedUser from './useSelectedUser';
import {useNavigation} from '@react-navigation/native';
import {useGetPostsByUserQuery} from '../redux/api/jsonApi';

const usePostsList = () => {
  const {user} = useSelectedUser();
  const navigation = useNavigation();
  const {
    data: posts,
    isLoading,
    refetch,
    isFetching,
  } = useGetPostsByUserQuery(user.id);

  const onSelectPost = (post, photo) => () => {
    navigation.navigate('post', {post, photo});
  };

  return {
    isLoading,
    posts,
    user,
    onSelectPost,
    refetch,
    isFetching,
  };
};

export default usePostsList;
