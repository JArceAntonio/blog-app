import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import globalStyles from '../utilities/globalStyles';

type NavbarProps = {
  title: string;
  showBackButton?: boolean;
  showLanguageButton?: boolean;
} & PropsWithChildren;

const Navbar = ({
  title,
  showBackButton = true,
  showLanguageButton = true,
}: NavbarProps): JSX.Element => {
  const navigation = useNavigation();
  const onPressBackButton = () => navigation.goBack();
  const onPressLanguageButton = () => navigation.navigate('languages');
  return (
    <View style={styles.navContainer}>
      {showBackButton ? (
        <TouchableOpacity
          style={styles.sideElement}
          onPress={onPressBackButton}>
          <Icon name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.sideElement} />
      )}
      <Text style={globalStyles.subtitle}>{title}</Text>
      {showLanguageButton ? (
        <TouchableOpacity
          style={styles.sideElement}
          onPress={onPressLanguageButton}>
          <Icon name="language" size={28} color="black" />
        </TouchableOpacity>
      ) : (
        <View style={styles.sideElement} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  sideElement: {
    width: 40,
  },
});

export default Navbar;
