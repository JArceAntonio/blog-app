import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {PropsWithChildren} from 'react';

type LoaderProps = {
  size?: string | number;
} & PropsWithChildren;

const Loader = ({size = 'large'}: LoaderProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="blue" size={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
});

export default Loader;
