/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useState } from 'react';

import { Wrapper, LabelInput, Input, ErrorMessage } from './styles';

import { TextField } from '@mui/material';

const FormField = ({
  type = 'text',
  name,
  label,
  width,
  marginLeft,
  defaultValue = '',
  register,
  setValueFormState = () => {},
  error,
  marginBottom,
}: any) => {
  const [value, setValue] = useState(() => {
    const newVal = defaultValue;
    return newVal;
  });

  /**
   * Gets the onChange
   */
  const onChange = (e: any) => {
    setValue(e.target.value);
    setValueFormState(name, e.target.value);
  };

  return (
    <Wrapper width={width} marginLeft={marginLeft} marginBottom={marginBottom}>
      <TextField
        type={type}
        id="outlined-controlled"
        label={label}
        {...register(name)}
        value={value}
        onChange={onChange}
        helperText={error ?? ''}
        error={error ?? ''}
      />
    </Wrapper>
  );
};

export default FormField;
