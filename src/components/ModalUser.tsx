import {View, Text, StyleSheet} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import useSelectedUser from '../hooks/useSelectedUser';
import Button from './Button';
import colors from '../utilities/colors';
import globalStyles from '../utilities/globalStyles';
import {useTranslation} from 'react-i18next';

type ModalUserProps = {
  modalOpen: boolean;
  onClose: Function;
  onStart: Function;
} & PropsWithChildren;

const ModalUser = ({
  modalOpen,
  onClose,
  onStart,
}: ModalUserProps): JSX.Element => {
  const {user} = useSelectedUser();
  const {t} = useTranslation();
  const onPressStart = () => {
    onClose();
    onStart();
  };
  return (
    <Modal isVisible={modalOpen} animationIn="fadeIn" animationOut="fadeOut">
      {user ? (
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={globalStyles.subtitle}>{t('userInformation')}</Text>
          </View>
          <View style={styles.modalContent}>
            <View style={styles.sectionHeader}>
              <Icon name="person-circle-outline" size={22} />
              <Text style={styles.sectionTitle}>
                {t('personalInformation')}
              </Text>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('name')}:</Text>
                <Text style={styles.sectionItemText}>{user.name}</Text>
              </View>
              <View style={styles.sectionItemRight}>
                <Text style={styles.sectionItemTitle}>{t('username')}:</Text>
                <Text style={styles.sectionItemText}>{user.username}</Text>
              </View>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('email')}:</Text>
                <Text style={styles.sectionItemText}>{user.email}</Text>
              </View>
              <View style={styles.sectionItemRight}>
                <Text style={styles.sectionItemTitle}>{t('phone')}:</Text>
                <Text style={styles.sectionItemText}>{user.phone}</Text>
              </View>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('website')}:</Text>
                <Text style={styles.sectionItemText}>{user.website}</Text>
              </View>
            </View>
            <View style={styles.sectionHeader}>
              <Icon name="ios-location-outline" size={22} />
              <Text style={styles.sectionTitle}>{t('address')}</Text>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('city')}:</Text>
                <Text style={styles.sectionItemText}>{user.address.city}</Text>
              </View>
              <View style={styles.sectionItemRight}>
                <Text style={styles.sectionItemTitle}>{t('street')}:</Text>
                <Text style={styles.sectionItemText}>
                  {user.address.street}
                </Text>
              </View>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('suite')}:</Text>
                <Text style={styles.sectionItemText}>{user.address.suite}</Text>
              </View>
              <View style={styles.sectionItemRight}>
                <Text style={styles.sectionItemTitle}>{t('zipcode')}:</Text>
                <Text style={styles.sectionItemText}>
                  {user.address.zipcode}
                </Text>
              </View>
            </View>
            <View style={styles.sectionHeader}>
              <Icon name="ios-briefcase" size={22} />
              <Text style={styles.sectionTitle}>{t('company')}</Text>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>{t('name')}:</Text>
                <Text style={styles.sectionItemText}>{user.company.name}</Text>
              </View>
              <View style={styles.sectionItemRight}>
                <Text style={styles.sectionItemTitle}>{t('catchPhrase')}:</Text>
                <Text style={styles.sectionItemText}>
                  {user.company.catchPhrase}
                </Text>
              </View>
            </View>
            <View style={styles.sectionRow}>
              <View style={styles.sectionItemLeft}>
                <Text style={styles.sectionItemTitle}>
                  {t('businessService')}:
                </Text>
                <Text style={styles.sectionItemText}>{user.company.bs}</Text>
              </View>
            </View>
          </View>
          <View style={styles.modalFooter}>
            <Button text={t('close')} variant="danger" onPress={onClose} />
            <Button text={t('start')} onPress={onPressStart} />
          </View>
        </View>
      ) : (
        <View />
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  modalHeader: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
  },
  modalContent: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    ...globalStyles.subtitle,
    marginLeft: 8,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  sectionItemLeft: {
    flex: 0.5,
    paddingRight: 4,
  },
  sectionItemRight: {
    flex: 0.5,
    paddingLeft: 4,
  },
  sectionItemTitle: {
    ...globalStyles.paragraphBold,
    fontSize: 13,
  },
  sectionItemText: {
    ...globalStyles.paragraph,
    fontSize: 13,
  },
});
export default ModalUser;
