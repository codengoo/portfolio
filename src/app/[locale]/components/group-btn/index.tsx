import Btn from "./btn";

export default function BtnGroup() {
  return (
    <div className="flex border border-slate-700 rounded-full w-fit p-1">
      <Btn active title="vi" />
      <Btn title="en" />
    </div>
  );
}
