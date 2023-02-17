import React, {PropsWithChildren} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {User} from '../types/User';
import globalStyles from '../utilities/globalStyles';

type UserItemProps = {
  user: User;
  onSelectUser: Function;
} & PropsWithChildren;

const UserItem = ({user, onSelectUser}: UserItemProps): JSX.Element => {
  return (
    <TouchableOpacity
      key={user.id}
      style={globalStyles.simpleCard}
      onPress={onSelectUser(user)}>
      <View style={styles.leftSide}>
        <Text style={globalStyles.paragraphBold}>{user.name}</Text>
        <Text style={globalStyles.paragraphLight}>{user.email}</Text>
      </View>
      <View>
        <Icon name="chevron-forward" size={28} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  leftSide: {
    flex: 1,
  },
});

export default UserItem;
