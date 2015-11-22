import React from 'react';

let ArticleList = require('./calinda/ArticleListComponent')
let Article = require('./calinda/ArticleComponent')

class AppComponent extends React.Component {
  render() {
    return(
      <ArticleList />
    )
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
