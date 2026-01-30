import type { CardProps } from "../types";

const Card = ({ className , ...props }: CardProps) => {
  return (
    <div
      data-slot="card"
      className={className}
      {...props}
    />
  );
}

Card.displayName = "Card";
export { Card };