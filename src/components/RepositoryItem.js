import React, {Component, Fragment} from 'react';
import {Text, Image, View} from 'react-native';
export default class RepositoriesList extends Component {
  render() {
    const {
      repoItemRow,
      repoItemContent,
      repoIcon,
      row,
      repoFullNameStyle,
      repoDescStyle,
      line
    } = styles;
    const {full_name, description, fork, language} = this.props.repo;
    return (
      <Fragment>
        <View style={repoItemRow}>
          <View style={repoIcon}>
            {/* if fork return fork icon */}
            {fork ? 
              <Image
              style={{width: 25, height: 35}}
              source={require('../../src/assets/fork-icon.png')}
              /> :
              <Image
                style={{width: 25, height: 35}}
                source={require('../../src/assets/repo-icon.png')}
              />
            }
          </View>
          <View style={repoItemContent}>
            <Text style={repoFullNameStyle}>{full_name}</Text>
            <Text style={repoDescStyle}>{description}</Text>
            <View style={row}>
              <Image
                  style={{width: 15, height: 15, marginRight: 10}}
                  source={require('../../src/assets/star-icon.png')}
              />
              <Text style={{marginRight: 10}}>3</Text>
              <Text>{language}</Text>
            </View>
          </View>
        </View>
        <View
          style={line}
        />
      </Fragment>
    );
  }
}

const styles = {
  repoItemRow: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flexDirection: 'row',
      marginLeft:10
  },
  repoItemContent: {
      alignItems: 'flex-start',
      position: 'relative',
      justifyContent: 'space-around',
      width: '85%',
      marginLeft: 10
  },
  repoIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  repoFullNameStyle: {
    marginTop: 5,
    fontSize: 18,
    color: '#0366d6'
  },
  repoDescStyle: {
    marginTop: 5,
    fontSize: 14,
    color: '#586069'
  },
  row: {
    flexDirection: 'row',
    marginTop: 5
  },
  line:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '100%',
    marginTop: 10
  }
};
