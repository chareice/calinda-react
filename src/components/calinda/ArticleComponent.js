'use strict';

import React from 'react';
import { Router, Route, Link } from 'react-router'

require('styles/calinda/Article.scss');

class ArticleComponent extends React.Component {
  render() {
    var headerStyle = {
      backgroundImage: 'url(' + this.props.data.title_image + '?imageView2/2/w/600)'
    }
    return (
      <article style={headerStyle} className="article-item">
        <header>
          <Link to={`/article/${this.props.data.id}`}>
            <div className="articleTitle">{this.props.data.title}</div>
          </Link>
        </header>
      </article>
    );
  }
}

ArticleComponent.displayName = 'CalindaArticleComponent';

// Uncomment properties you need
// ArticleComponent.propTypes = {};
// ArticleComponent.defaultProps = {};


export default ArticleComponent;
