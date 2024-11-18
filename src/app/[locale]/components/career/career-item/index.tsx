import InfoItem, { IInfoItem } from "../../info_list/info_item";

export interface ICareerItemProps extends IInfoItem {
  time: string;
  job: string;
  company: string;
}

export default function CareerItem({
  time,
  job,
  company,
  ...props
}: ICareerItemProps) {
  return (
    <InfoItem
      {...props}
      left={
        <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
          {time}
        </h3>
      }
      title={
        <>
          {job}
          <span> · </span>
          {company}
        </>
      }
    />
  );
}
