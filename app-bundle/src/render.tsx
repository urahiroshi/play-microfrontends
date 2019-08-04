import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BundleComponent } from './bundle-component';

const render = (container: Element) => {
  ReactDOM.render(<BundleComponent />, container);
};

export { render };
