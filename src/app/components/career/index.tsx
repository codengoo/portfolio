import CareerItem, { ICareer } from "./career-item";
import ExternalLinkIcon from "./external-link-icon";

interface ICareerProps {
  data: ICareer[];
}

export default function Career({ data }: ICareerProps) {
  return (
    <div>
      <ol className="group/list">
        {data.map((value, index) => (
          <CareerItem key={"career_" + index} data={value} />
        ))}
      </ol>

      <div className="mt-12">
        <a
          className="group text-slate-200 hover:text-teal-300 font-medium leading-snug"
          href=""
        >
          <span>View full my Resume</span>
          <ExternalLinkIcon />
        </a>
      </div>
    </div>
  );
}
