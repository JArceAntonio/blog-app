import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../utilities/globalStyles';
import useSelectedUser from '../hooks/useSelectedUser';
import colors from '../utilities/colors';
import {useTranslation} from 'react-i18next';

const PostPage = ({route, navigation}): JSX.Element => {
  const {post, photo} = route.params;
  const {user} = useSelectedUser();
  const {t} = useTranslation();
  const onPressBack = () => navigation.goBack();
  return (
    <SafeAreaView style={styles.pageContainer}>
      <ScrollView>
        <View>
          <Image source={{uri: photo.url}} style={styles.postImage} />
          <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
            <Icon name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
        </View>

        <View style={styles.postContent}>
          <Text style={globalStyles.h2}>{post.title}</Text>
          <Text style={[globalStyles.subtitle, {marginBottom: 4}]}>
            {t('by')} {user.name}
          </Text>
          <Text style={globalStyles.paragraph}>{post.body}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  postImage: {
    height: 220,
  },
  postContent: {
    backgroundColor: colors.white,
    marginTop: -24,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  pageContainer: {
    ...globalStyles.mainContainer,
    backgroundColor: colors.white,
  },
  backButton: {
    backgroundColor: colors.darkGrayTransparent,
    borderRadius: 12,
    padding: 8,
    position: 'absolute',
    top: 10,
    left: 20,
  },
});

export default PostPage;
