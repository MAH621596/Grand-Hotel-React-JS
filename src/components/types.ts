import type { ReactNode } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pre?: ReactNode;
  post?: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

export interface CardProps {
  image?: string;
  heading?: string;
  paragraph?: string;
  buttonText?: string;
  className?: string;
  price?: number | string;
  children?: React.ReactNode;
}
