export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  disabled?: boolean;
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
  errorMessage?: string;
  successMessage?: string;
  isLoading?: boolean;
}