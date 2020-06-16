import React from 'react';

import { RecBtn } from './rectangular-button.styles.jsx';

const RectangularButton = ({ children, ...otherProps }) => (
  <RecBtn {...otherProps}>
    {children}
  </RecBtn>
)

export default RectangularButton;