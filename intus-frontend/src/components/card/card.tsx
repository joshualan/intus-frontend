import { PropsWithChildren } from "react";
import { Card as BootstrapCard } from "react-bootstrap";
import "./card.scss";

export const Card = ({
  children,
  className,
}: PropsWithChildren<{ className: string }>) => {
  return (
    <BootstrapCard className={`${className} intus-card`}>
      {children}
    </BootstrapCard>
  );
};
