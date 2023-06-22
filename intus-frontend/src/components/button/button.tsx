import { Button as BootstrapButton } from "react-bootstrap";
import { PropsWithChildren } from "react";

export const Button = ({
  className,
  children,
  onClick,
}: PropsWithChildren<{ className?: string; onClick?: () => void }>) => {
  return (
    <BootstrapButton onClick={onClick} className={`intus-button ${className}`}>
      {children}
    </BootstrapButton>
  );
};
