import React from 'react';

import { Body, Container, Left, StyleProvider, View } from 'native-base';

import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';
import TopFilter from '../views/TopFilter';
import LeftSideBar from '../views/LeftSideBar';
import MainContentArea from '../views/MainContentArea';
import { Dimensions, StyleSheet } from 'react-native';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = () => {

  return (
    <StyleProvider style={getTheme(platform)}>
      <Container style={styles.container}>
        <View style={styles.topContainer}>
          <TopFilter />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.leftContainer}>
            <LeftSideBar />
          </View>
          <View style={styles.rightContainer}>
            <MainContentArea />
          </View>
        </View>
      </Container>
    </StyleProvider>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightContainer: {
    flex: 3,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});