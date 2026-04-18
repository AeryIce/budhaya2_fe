import Link from "next/link";

type TabItem = {
  label: string;
  href: string;
  active?: boolean;
};

type Props = {
  items: TabItem[];
};

export function SubmenuTabs({ items }: Props) {
  return (
    <div className="mt-6 inline-flex flex-wrap items-center gap-1 rounded-full border border-sky-100/80 bg-white/95 p-1.5 shadow-[0_20px_50px_-34px_rgba(15,23,42,0.35)]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={[
            "rounded-full px-6 py-3 text-sm transition",
            item.active
              ? "bg-sky-900 !text-white font-semibold shadow-[0_18px_40px_-24px_rgba(12,74,110,0.65)]"
              : "!text-slate-700 hover:bg-sky-50 hover:!text-sky-800",
          ].join(" ")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}