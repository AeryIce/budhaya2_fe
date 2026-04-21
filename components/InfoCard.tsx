import Link from "next/link";

type Props = {
  eyebrow?: string;
  title: string;
  description: string;
  href?: string;
};

export function InfoCard({ eyebrow, title, description, href }: Props) {
  const content = (
    <div className="rounded-[26px] border border-sky-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {eyebrow ? <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{eyebrow}</div> : null}
      <div className="mt-2 text-xl font-semibold text-slate-900">{title}</div>
      <div className="mt-3 text-sm leading-7 text-slate-600">{description}</div>
      {href ? <div className="mt-5 text-sm font-semibold text-sky-800">Buka halaman →</div> : null}
    </div>
  );

  if (!href) {
    return content;
  }

  return <Link href={href}>{content}</Link>;
}
