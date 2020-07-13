import React from 'react';

import { Button } from './scroll-to-top-button.styles';

const ScrollToTopButton = () => {
  return(
    <Button onClick={() => {
      document.documentElement.scrollTop = 0;
    }}>
    UP
    </Button>
  )
}

export default ScrollToTopButton;