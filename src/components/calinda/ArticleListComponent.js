'use strict';

import React from 'react';

require('styles/calinda/ArticleList.scss');

let Article = require('./ArticleComponent')
let SiteFooter = require('../SiteFooterComponent')

class ArticleListComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: []
    };
  }

  componentDidMount(){
    fetch("https://paihe.123hxf.com/api/users/5/articles")
      .then((response) => {
          response.json().then((data) => {
            this.setState({
              articles: data.data
            })
          });
        });
  }

  render() {
    var lists = this.state.articles.map((article) => {
      return <Article data={article} key={article.title}/>
    });

    return (
      <div className="articlelist-component">
        {lists}
        <SiteFooter />
      </div>
    );
  }
}

ArticleListComponent.displayName = 'CalindaArticleListComponent';

// Uncomment properties you need
// ArticleListComponent.propTypes = {};
// ArticleListComponent.defaultProps = {};


export default ArticleListComponent;
