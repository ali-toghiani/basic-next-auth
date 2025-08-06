import { forwardRef } from 'react';

import { InputProps } from '@/types/Input';
import classes from './Input.module.scss';

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { errorMessage, containerClassName, id, label, inputClassName, ...restProps}: InputProps, ref)
  {
  return (
    <div className={`${classes['input-wrapper']} ${containerClassName || ''}`}>
      <label htmlFor={id}>{label}</label>
      <input
        {...restProps}
        className={`input ${inputClassName || ''}`}
        ref={ref}
      />
      {errorMessage && (
        <span className={classes['error-message']}>{errorMessage}</span>
      )}
    </div>
  );
})