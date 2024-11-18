import Image from "next/image";
import InfoItem, { IInfoItem } from "../../info_list/info_item";

export interface IProjectItemProps extends IInfoItem {
  image: string;
  name: string;
}

export default function ProjectItem({
  image,
  name,
  ...props
}: IProjectItemProps) {
  return (
    <InfoItem
      {...props}
      left={
        <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
          <Image
            alt="project image"
            src={image}
            width={200}
            height={48}
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
          />
        </h3>
      }
      title={name}
    />
  );
}
