import ExternalLinkIcon from "../external_link_icon";

export interface IExternalLinkProps {
  href: string;
  title: string;
}

export default function ExternalLink({ href, title }: IExternalLinkProps) {
  return (
    <div className="mt-12">
      <a
        className="group text-slate-200 hover:text-teal-300 font-medium leading-snug"
        href={href}
      >
        <span>{title}</span>
        <ExternalLinkIcon />
      </a>
    </div>
  );
}
