import InfoList from "../info_list";
import CareerItem, { ICareerItemProps } from "./career-item";

export interface ICareer {
  data: ICareerItemProps[];
}

export default function Career({ data }: ICareer) {
  return (
    <InfoList
      data={data}
      renderItem={(value, index) => (
        <CareerItem {...value} key={"item_" + index} />
      )}
      more={{ href: "", title: "View full my Resume" }}
    />
  );
}
