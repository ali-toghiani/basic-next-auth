import classes from './Button.module.scss';
import { ButtonProps } from '@/types/Button';

export default function Button({children, className, type, ...rest}: ButtonProps){
  return (
    <button className={`${classes['button']} ${className}`} type={type || 'button'} {...rest}>
      {children}
    </button>
  );
}