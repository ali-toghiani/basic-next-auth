export interface ButtonProps {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}