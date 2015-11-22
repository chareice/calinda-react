import React from 'react';
import { Router, Route, Link } from 'react-router';
import App from './Main'
import ArticleList from './calinda/ArticleListComponent'
import Article from './calinda/ArticleComponent'

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
        <Route path="list" component={ArticleList} />
        <Route path="show" component={Article} />
      </Router>
    );
  }
}

export default RouterComponent;
