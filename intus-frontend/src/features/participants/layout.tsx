import { PropsWithChildren } from "react";
export const Layout = (props: PropsWithChildren) => {
  return (
    <>
      This is a fake layout
      {props.children}
    </>
  );
};
