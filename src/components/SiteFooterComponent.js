'use strict';

import React from 'react';

require('styles/SiteFooter.scss');

class SiteFooterComponent extends React.Component {
  render() {
    return (
      <footer id="site-footer">@Chareice 赣ICP备14009574号-3</footer>
    );
  }
}

SiteFooterComponent.displayName = 'SiteFooterComponent';

// Uncomment properties you need
// SiteFooterComponent.propTypes = {};
// SiteFooterComponent.defaultProps = {};


export default SiteFooterComponent;
