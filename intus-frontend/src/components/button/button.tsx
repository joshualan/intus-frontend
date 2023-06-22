import { Button as BootstrapButton } from "react-bootstrap";
import { PropsWithChildren } from "react";

export const Button = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <BootstrapButton className={`intus-button ${className}`}>
      {children}
    </BootstrapButton>
  );
};
