import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../utilities/colors';
import {useTranslation} from 'react-i18next';

type SearchInputProps = {
  value?: string | undefined;
  onChange?: (text: string) => void | undefined;
} & PropsWithChildren;

const SearchInput = ({value, onChange}: SearchInputProps): JSX.Element => {
  const {t} = useTranslation();
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder={t('searchPlaceholder')}
        placeholderTextColor={colors.darkGray}
        underlineColorAndroid="transparent"
      />
      <Icon
        name="search"
        size={22}
        color={colors.darkGray}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: colors.gray,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: 'black',
  },
  icon: {
    paddingHorizontal: 12,
  },
});

export default SearchInput;
