import { IconType } from "react-icons";

interface IBtnProps {
  icon: IconType;
}

export default function BtnIcon({ icon: Icon }: IBtnProps) {
  return (
    <button className="w-8 h-8 rounded-full flex justify-center items-center border border-slate-700">
      <Icon color="#e2e8f0"/>
    </button>
  );
}
