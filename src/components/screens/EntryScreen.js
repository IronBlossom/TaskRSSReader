import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity, Linking} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions';

const EntryScreen = ({entries, navigation, route}) => (
  <FlatList
    data={entries}
    renderItem={({item}) => (
      <TouchableOpacity
        style={{flex: 1, padding: 10}}
        onPress={() => {
            console.log(item);
          Linking.openURL(item.link);
        }}>
        <Text>{item.title}</Text>
      </TouchableOpacity>
    )}
    ListHeaderComponent={() => (
      <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 24}}>
        {route.params.title} ({entries ? entries.length : 'wait...'})
      </Text>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

const mapStateToProps = state => ({
  entries: state.entry.entries,
  error: state.entry.error,
});

export default connect(mapStateToProps)(EntryScreen);
