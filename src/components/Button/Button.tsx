import classes from './Button.module.scss';
import { ButtonProps } from '@/types/Button';

export default function Button({children, className, type, isLoading, ...rest}: ButtonProps){
  return (
    <button 
      className={`${classes.button} ${className || ''}`} 
      type={type || 'button'} 
      disabled={isLoading || rest.disabled} 
      {...rest}
    >
      {isLoading ? <span className={classes.spinner}></span> : children}
    </button>
  );
}