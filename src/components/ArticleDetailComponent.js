'use strict';

import React from 'react';

require('styles//ArticleDetail.scss');

class ArticleDetailComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      article: {}
    };
  }

  componentDidMount() {
    var articleId = this.props.params.articleId;
    fetch("http://www.paihe.io/api/articles/" + articleId)
      .then((response) => {
          response.json().then((data) => {
            this.setState({
              article: data.data
            })
          });
        });
  }

  render() {
    return (
      <article className="articledetail-component">
        <header>
          <img src={this.state.article.title_image}/>
          <h1 className="article-title">{this.state.article.title}</h1>
        </header>
        <section dangerouslySetInnerHTML={{__html: this.state.article.cooked}}></section>
      </article>
    );
  }
}

ArticleDetailComponent.displayName = 'ArticleDetailComponent';

// Uncomment properties you need
// ArticleDetailComponent.propTypes = {};
// ArticleDetailComponent.defaultProps = {};


export default ArticleDetailComponent;
