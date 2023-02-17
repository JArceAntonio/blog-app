import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useGetPhotoByPostQuery} from '../redux/api/jsonApi';
import globalStyles from '../utilities/globalStyles';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import {Post} from '../types/Post';

type PostItemProps = {
  post: Post;
  onSelectPost: Function;
} & PropsWithChildren;

const PostItem = ({post, onSelectPost}: PostItemProps): JSX.Element => {
  const {data: photo, isLoading} = useGetPhotoByPostQuery(post.id);

  return (
    <SkeletonContent
      isLoading={isLoading}
      layout={[
        {
          ...styles.container,
          children: [
            globalStyles.imageThumb,
            {
              width: '84%',
              marginLeft: 8,
              children: [
                {
                  height: 8,
                  width: '100%',
                  marginBottom: 10,
                },
                {
                  height: 8,
                  width: '70%',
                },
              ],
            },
          ],
        },
      ]}>
      <TouchableOpacity
        style={styles.postContent}
        onPress={onSelectPost(post, photo)}>
        <Image source={{uri: photo?.thumbnailUrl}} style={styles.postThumb} />
        <View style={styles.leftSide}>
          <Text style={globalStyles.paragraphBold}>{post.title}</Text>
        </View>
      </TouchableOpacity>
    </SkeletonContent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
  },
  postContent: {
    ...globalStyles.simpleCard,
    paddingVertical: 0,
    paddingHorizontal: 0,
    overflow: 'hidden',
    minHeight: 80,
  },
  loaderContainer: {
    paddingVertical: 8,
  },
  leftSide: {
    flex: 1,
    padding: 12,
  },
  postThumb: {
    width: 70,
    height: '100%',
  },
});

export default PostItem;
