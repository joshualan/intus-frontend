import { PropsWithChildren } from "react";

export const H2 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <h2 className={`intus-h2 ${className}`}>{children}</h2>;
};

export const H3 = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return <h3 className={`intus-h2 ${className}`}>{children}</h3>;
};
