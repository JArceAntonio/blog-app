import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import usePostsList from '../hooks/usePostsList';
import Loader from '../components/Loader';
import PostItem from '../components/PostItem';
import Navbar from '../components/Navbar';
import {RefreshControl} from 'react-native-gesture-handler';
import globalStyles from '../utilities/globalStyles';
import {useTranslation} from 'react-i18next';

const PostsPage = (): JSX.Element => {
  const {posts, isLoading, user, onSelectPost, isFetching, refetch} =
    usePostsList();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <Navbar title={t('posts')} />
      <FlatList
        style={{paddingHorizontal: 20}}
        refreshControl={
          <RefreshControl
            refreshing={!isLoading && isFetching}
            onRefresh={refetch}
          />
        }
        ListEmptyComponent={isLoading ? <Loader /> : null}
        ListHeaderComponent={
          <Text style={globalStyles.h3}>
            {t('posts')}: {user.name}
          </Text>
        }
        data={posts}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <PostItem post={item} onSelectPost={onSelectPost} />
        )}
      />
    </SafeAreaView>
  );
};

export default PostsPage;
