import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import globalStyles from '../utilities/globalStyles';
import Navbar from '../components/Navbar';

const languages = [
  {name: 'spanish', code: 'es'},
  {name: 'english', code: 'en'},
];

const LanguagesPage = ({navigation}) => {
  const {t, i18n} = useTranslation();

  const onPressLang = (lang: string) => async () => {
    await i18n.changeLanguage(lang);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <Navbar title={t('selectLanguage')} showLanguageButton={false} />
      <View style={styles.listContainer}>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang.code}
            style={styles.langButton}
            onPress={onPressLang(lang.code)}>
            <Text style={globalStyles.h3}>{t(lang.name)}</Text>
            {i18n.language === lang.code && (
              <Icon
                name="checkmark"
                size={24}
                color="black"
                style={styles.icon}
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  langButton: {
    ...globalStyles.simpleCard,
    justifyContent: 'space-between',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 12,
  },
});

export default LanguagesPage;
