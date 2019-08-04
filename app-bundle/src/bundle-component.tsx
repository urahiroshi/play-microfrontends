import * as React from "react";
import { SubComponent } from './sub-component';

const BundleComponent: React.FC<{}> = () => (
  <div>
    <h2>Bundle Component</h2>
    <SubComponent />
  </div>
);

export { BundleComponent };
