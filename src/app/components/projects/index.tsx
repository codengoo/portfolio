import InfoList from "../info_list";
import ProjectItem, { IProjectItemProps } from "./project_item";

export interface IProject {
  data: IProjectItemProps[];
}

export default function Projects({ data }: IProject) {
  return (
    <InfoList
      data={data}
      renderItem={(value, index) => (
        <ProjectItem {...value} key={"item_" + index} />
      )}
      more={{ href: "", title: "View full my projects" }}
    />
  );
}
