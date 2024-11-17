import { ReactElement } from "react";
import ExternalLink, { IExternalLinkProps } from "./external_link";
import { IInfoItem } from "./info_item";

interface IInfoListProps<T extends IInfoItem> {
  data: T[];
  renderItem: (value: T, index: number) => ReactElement;
  more?: IExternalLinkProps;
}

export default function InfoList<T extends IInfoItem>({ data, more, renderItem }: IInfoListProps<T>) {
  return (
    <div className="mb-24">
      <ol className="group/list">
        {data.map((value, index) => renderItem(value, index))}
      </ol>

      {more && <ExternalLink {...more} />}
    </div>
  );
}
