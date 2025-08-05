import { forwardRef } from 'react';

import { InputProps } from '@/types/Input';
import classes from './Input.module.scss';

export default forwardRef<HTMLInputElement, InputProps>(function Input(InputProps: InputProps, ref) {
  return (
    <div className={`${classes['input-wrapper']} ${InputProps.containerClassName || ''}`}>
      <label htmlFor={InputProps.id}>{InputProps.label}</label>
      <input
      {...InputProps}
      className={`input ${InputProps.inputClassName || ''}`}
      ref={ref}
    />
    </div>
  );
})