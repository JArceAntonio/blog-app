import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Loader from '../components/Loader';
import useUsersList from '../hooks/useUsersList';
import UserItem from '../components/UserItem';
import Navbar from '../components/Navbar';
import globalStyles from '../utilities/globalStyles';
import SearchInput from '../components/SearchInput';
import ModalUser from '../components/ModalUser';
import {useTranslation} from 'react-i18next';

const UsersPage = (): JSX.Element => {
  const {
    isLoading,
    filteredUsers,
    searchEmail,
    setSearchEmail,
    onSelectUser,
    isFetching,
    refetch,
    modalOpen,
    closeModal,
    goPostsPage,
  } = useUsersList();
  const {t} = useTranslation();

  return (
    <SafeAreaView style={globalStyles.mainContainer}>
      <Navbar title={t('users')} showBackButton={false} />
      <View style={styles.searchInputContainer}>
        <SearchInput value={searchEmail} onChange={setSearchEmail} />
      </View>

      <FlatList
        style={{paddingHorizontal: 20}}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isFetching && !isLoading}
            onRefresh={refetch}
          />
        }
        ListEmptyComponent={isLoading ? <Loader /> : null}
        data={filteredUsers}
        renderItem={({item: user}) => (
          <UserItem user={user} onSelectUser={onSelectUser} />
        )}
      />
      <ModalUser
        modalOpen={modalOpen}
        onClose={closeModal}
        onStart={goPostsPage}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchInputContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});

export default UsersPage;
