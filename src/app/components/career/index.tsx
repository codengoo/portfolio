export interface ICareer {
  time: string;
  job: string;
  company: string;
  referenceHref: string;
  description: string;
  tags: string[];
}

interface ICareerProps {
  data: ICareer;
}

export default function Career({ data }: ICareerProps) {
  return (
    <div className="grid grid-cols-8">
      <div className="col-span-2"></div>

      <div className="col-span-6"></div>
    </div>
  );
}
