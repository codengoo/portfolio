import BtnIcon from "@/app/[locale]/components/btn_icon";
import BtnGroup from "@/app/[locale]/components/group-btn";
import LinkIcon from "@/app/[locale]/components/link_icon";
import SectionLink from "@/app/[locale]/components/link_section";
import { useTranslations } from "next-intl";
import {
  FiFacebook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { SiZalo } from "react-icons/si";
import { TbBrandGmail, TbBrightnessDownFilled } from "react-icons/tb";

export default function Profile() {
  const t = useTranslations("Home");

  return (
    <div className="py-24 flex flex-col justify-between sticky top-0 left-0 h-screen max-h-screen z-50">
      <div>
        <h1 className="text-6xl font-semibold tracking-tight text-slate-200 italic">
          Do Tuan Nghia
        </h1>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
          Coder
        </h2>
        <p className="mt-4 text-slate-500">{t("slogan")}</p>

        <div className="flex flex-row gap-4 mt-4">
          <LinkIcon
            href="mailto:nghiadt22.work@gmail.com"
            icon={TbBrandGmail}
          />
          <LinkIcon
            href="https://www.facebook.com/nghiacangao"
            icon={FiFacebook}
          />
          <LinkIcon href="" icon={FiLinkedin} />
          <LinkIcon
            href="https://www.facebook.com/nghiacangao"
            icon={FiInstagram}
          />
          <LinkIcon href="https://github.com/nacana22" icon={FiGithub} />
          <LinkIcon href="https://gitlab.com/codengoo" icon={FiGitlab} />
          <LinkIcon href="https://gitlab.com/codengoo" icon={SiZalo} />
        </div>
      </div>

      <div className="space-y-4">
        <SectionLink href="" title="About" />
        <SectionLink href="" title="Experience" />
        <SectionLink href="" title="Projects" />
      </div>

      <div className="flex gap-2 items-center">
        <BtnGroup />
        <BtnIcon icon={TbBrightnessDownFilled} />
      </div>
    </div>
  );
}
