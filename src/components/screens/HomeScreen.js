import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';


const HomeScreen =({channels,onChannelSelected, navigation}) => (<FlatList
    data={channels}
    renderItem={({item}) => (
      <TouchableOpacity
        style={{flex: 1, padding: 10}}
        onPress={() => {
          onChannelSelected(item.url);
          navigation.navigate('Entry', {title: item.name})
        }}>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item, index) => index.toString()}
  />);

  const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onChannelSelected: actions.fetchEntries,
    },
    dispatch,
  );

const mapStateToProps = state => ({
  channels: state.channel.channels,
  error: state.channel.error,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
