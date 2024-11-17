import { ReactNode } from "react";
import ExternalLinkIcon from "../external_link_icon";

export interface IRightColumnInfoProps {
  title: ReactNode;
  description: string;
  tags: string[];
}

export default function RightColumnInfo({
  description,
  tags,
  title,
}: IRightColumnInfoProps) {
  return (
    <div className="col-span-6">
      <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300">
        {title}
        <ExternalLinkIcon />
      </h3>
      <p className="text-sm leading-normal mt-2 text-gray-500">{description}</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {tags.map((value, index) => (
          <li key={"tag_" + index} className="">
            <div className="flex items-center justify-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 w-fit">
              {value}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
