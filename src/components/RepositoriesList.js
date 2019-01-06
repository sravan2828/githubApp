import React, {Component, Fragment} from 'react';
import {FlatList} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import RepositoryItem from "./RepositoryItem";
import { addRepositories } from '../redux/GitActions';

class RepositoriesList extends Component {
  componentDidMount(){
    const { addRepositories } = this.props;
    axios.get('https://api.github.com/users/supreetsingh247/repos')
      .then(function (response) {
        console.log(response.data);
        addRepositories(response.data);
    })
      .catch(function (error) {
        console.log(error);
    });
  }
  render() {
    const { repositories } = this.props;
    return (
      <FlatList
          data={repositories}
          renderItem={({item}) => <RepositoryItem repo={item} key={item.id}/>}
        />
    );
  }
}

const mapStateToProps = (state) => {
  const { repositories } = state.git;
  return { repositories };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addRepositories,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoriesList);