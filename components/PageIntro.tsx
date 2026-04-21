type Props = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/82 p-8 shadow-[0_26px_70px_-44px_rgba(15,23,42,0.55)] backdrop-blur-sm md:p-10">
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-24 w-24 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative max-w-3xl">
        <div className="inline-flex rounded-full border border-sky-100 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
          {eyebrow}
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-600 md:text-lg">{description}</p>
      </div>
    </div>
  );
}