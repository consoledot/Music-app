import { FC } from "react";

export const HorizontalLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className=" max-w-screen-2xl overflow-x-scroll h-fit flex gap-3 ">
      {children}
    </div>
  );
};
