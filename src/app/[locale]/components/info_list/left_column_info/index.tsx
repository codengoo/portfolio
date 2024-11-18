import { ReactNode } from "react";

interface ILeftColumnInfoProps {
  children: ReactNode;
}

export default function LeftColumnInfo({ children }: ILeftColumnInfoProps) {
  return <div className="col-span-2">{children}</div>;
}
