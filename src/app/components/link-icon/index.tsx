import Link from "next/link";
import { IconType } from "react-icons";

interface ILinkIconProps {
  icon: IconType;
  href: string;
}

export default function LinkIcon({ icon: Icon, href }: ILinkIconProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="hover:text-[#e2e8f0] text-[#64748b] transition-colors"
    >
      <Icon size={24} />
    </Link>
  );
}
