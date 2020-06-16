import React from 'react';

import { FormInputField } from './form-input.styles.jsx';

const FormInput = ({ handleChange, ...otherProps }) => (
  <FormInputField onChange={handleChange} {...otherProps}/>
)

export default FormInput;