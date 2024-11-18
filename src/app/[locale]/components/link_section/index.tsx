import Link from "next/link";

interface ILinkSection {
  title: string;
  href: string;
  className?: string;
  direction?: "vertical" | "horizontal";
}

export default function SectionLink({
  href,
  title,
  direction = "horizontal",
  className,
}: ILinkSection) {
  return (
    <div>
      <Link
        href={href}
        className={
          "flex text-gray-500 uppercase before:bg-slate-500 after:bg-slate-500 items-center gap-2 hover:text-slate-200  before:transition-all after:transition-all hover:after:bg-slate-200 hover:before:bg-slate-200 font-semibold " +
          (direction === "vertical"
            ? "hover:after:h-20 after:w-[1px] after:h-10 [writing-mode:vertical-lr] "
            : "hover:before:w-20 before:h-[1px] before:w-10  ") +
          (className || " ")
        }
      >
        {title}
      </Link>
    </div>
  );
}
