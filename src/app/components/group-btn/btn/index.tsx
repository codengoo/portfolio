interface IBtnProps {
  title: string;
  active?: boolean;
}

export default function Btn({ active, title }: IBtnProps) {
  return (
    <button
      className={
        "w-6 h-6 rounded-full flex justify-center items-center " +
        (active ? "bg-slate-800 " : "")
      }
    >
      <p
        className={"text-xs " + (active ? "text-slate-100 " : "text-slate-500")}
      >
        {title}
      </p>
    </button>
  );
}
