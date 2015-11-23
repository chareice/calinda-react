import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './Main'
import ArticleDetail from './ArticleDetailComponent'

require('styles/App.scss');
// Render the main component into the dom
render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App} />
    <Route path="/article/:articleId" component={ArticleDetail}/>
  </Router>
), document.getElementById('app'));
