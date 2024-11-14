import Link from "next/link";

interface ILinkSection {
  title: string;
  href: string;
}

export default function SectionLink({ href, title }: ILinkSection) {
  return (
    <div>
      <Link href={href} className="flex text-gray-500 uppercase before:w-10 before:h-[1px] before:bg-slate-500 items-center gap-2 hover:text-slate-200 hover:before:bg-slate-200 hover:before:w-20 before:transition-all font-semibold">
        {title}
      </Link>
    </div>
  );
}
