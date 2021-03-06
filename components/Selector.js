import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { theme } from 'galio-framework';

const styles = StyleSheet.create({
  base: {
    margin: theme.SIZES.BASE / 3,
    width: 60,
    height: 60,
    padding: 15,
    borderWidth: 2,
    borderRadius: 50
  },

  inactive: {
    backgroundColor: '#F6F9FC',
    borderColor: '#DEE2E6'
  },

  active: {
    borderColor: '#562E70'
  }
});

const Selector = ({ onChange, active, children }) => {
  const containerStyles = [
    styles.base,
    active ? styles.active : styles.inactive
  ];

  return (
    <TouchableOpacity onPress={onChange}>
      <View style={containerStyles}>{children}</View>
    </TouchableOpacity>
  );
};

export default Selector;