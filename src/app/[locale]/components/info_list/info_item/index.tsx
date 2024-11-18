import { ReactNode } from "react";
import LeftColumnInfo from "../left_column_info";
import RightColumnInfo, { IRightColumnInfoProps } from "../right_column_info";

interface IInfoItemProps extends IRightColumnInfoProps {
  left: ReactNode;
  href: string;
}

export type IInfoItem = Omit<IInfoItemProps, "left" | "title">;

export default function InfoItem({ left, href, ...props }: IInfoItemProps) {
  return (
    <li>
      <a className="" href={href}>
        <div className="group grid grid-cols-8 gap-4 hover:!opacity-100 group-hover/list:opacity-50 hover:bg-slate-800/50 hover:drop-shadow-lg p-4 rounded-md transition-all border border-transparent hover:border-slate-800">
          <LeftColumnInfo>{left}</LeftColumnInfo>
          <RightColumnInfo {...props} />
        </div>
      </a>
    </li>
  );
}
