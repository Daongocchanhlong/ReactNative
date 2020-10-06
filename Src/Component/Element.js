import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Element extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.contain}>
        <View style={styles.containItem}>
          <View style={styles.containNamePhone}>
            <Text style={styles.text}>Đào Ngọc Chánh Long</Text>
            <Text style={styles.text}>0779411697</Text>
          </View>
          <View style={styles.containNamePhone}>
            <Text style={styles.text}>Tâm Hải</Text>
            <Text style={styles.text}>k33/09 Bàu trảng 1</Text>
          </View>
        </View>
      </View>
    );
  }
}
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: '#F6CEEC',
  },
  containItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
  },
  containNamePhone: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
  },
  text: {
    fontSize: 20,
  },
});
