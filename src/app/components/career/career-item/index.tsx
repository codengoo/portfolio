import ExternalLinkIcon from "../external-link-icon";

export interface ICareer {
  time: string;
  job: string;
  company: string;
  referenceHref: string;
  description: string;
  tags: string[];
}

interface ICareerItemProps {
  data: ICareer;
}

export default function CareerItem({ data }: ICareerItemProps) {
  return (
    <li>
      <a className="" href={data.referenceHref}>
        <div className="group grid grid-cols-8 gap-4 hover:!opacity-100 group-hover/list:opacity-50 hover:bg-slate-800/50 hover:drop-shadow-lg p-4 rounded-md transition-all border border-transparent hover:border-slate-800">
          <div className="col-span-2">
            <h3 className="text-slate-500 text-sm font-semibold uppercase tracking-wide">
              {data.time}
            </h3>
          </div>

          <div className="col-span-6">
            <h3 className="font-medium leading-snug text-slate-200 group-hover:text-teal-300">
              {data.job}
              <span> · </span>
              {data.company}
              <ExternalLinkIcon />
            </h3>
            <p className="text-sm leading-normal mt-2 text-gray-500">
              {data.description}
            </p>
            <ul className="mt-2 flex flex-wrap gap-1.5">
              {data.tags.map((value, index) => (
                <li key={"tag_" + data.company + index} className="">
                  <div className="flex items-center justify-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-500 w-fit">
                    {value}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </a>
    </li>
  );
}
