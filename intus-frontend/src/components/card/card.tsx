import { PropsWithChildren } from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./card.scss";

export const Card = ({
  children,
  className,
  onClick,
}: PropsWithChildren<{ className?: string; onClick?: () => void }>) => {
  return (
    <BootstrapCard onClick={onClick} className={`${className} intus-card`}>
      {children}
    </BootstrapCard>
  );
};
