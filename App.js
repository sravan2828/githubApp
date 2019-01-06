import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from "./src/components/Header";
import RepositoryList from "./src/components/RepositoriesList";
import GitReducer from './src/redux/GitReducer';

const store = createStore(GitReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Header/>
        <RepositoryList/>
      </Provider>
    );
  }
}
