import React, {memo} from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../core/theme';
import color from '../../core/colors';
type Props = {
  children: React.ReactNode;
};

const Header = ({children}: Props) => (
  <Text style={styles.header}>{children}</Text>
);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: color.black,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
