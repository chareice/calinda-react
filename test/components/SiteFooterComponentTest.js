/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

// Uncomment the following lines to use the react test utilities
// import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import SiteFooterComponent from 'components//SiteFooterComponent.js';

describe('SiteFooterComponent', () => {
    let component;

    beforeEach(() => {
      component = createComponent(SiteFooterComponent);
    });

    it('should have its component name as default className', () => {
      expect(component.props.className).to.equal('sitefooter-component');
    });
});
