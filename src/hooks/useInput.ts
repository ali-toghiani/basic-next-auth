import { useState, useEffect } from 'react';
import { z } from 'zod';

import { InputState } from '@/types/Input';

export function useInput<T extends string>(
  initialValue: T,
  validationSchema: z.ZodObject<{ phone: z.ZodString }>,
): InputState<T> {
  const [value, setValue] = useState<T>(initialValue);
  const [isTouched, setIsTouched] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isTouched) {
      const result = validationSchema.safeParse({ phone: value });
      if (result.success) {
        setError('');
      } else {
        setError(result.error.issues[0]?.message || 'Invalid input');
      }
    }
  }, [value, isTouched, validationSchema]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T);
    setIsTouched(true);
  };

  const handleBlur = () => {
    if (value === '') {
      setError('This field is required');
    }
    setIsTouched(true);
  };

  return {
    value,
    onChange: handleChange,
    onBlur: handleBlur,
    isTouched,
    error: isTouched ? error : '',
  };
}