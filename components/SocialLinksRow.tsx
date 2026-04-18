import { socialLinks } from "@/data/mock";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.9]">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" className="fill-current stroke-none" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M21.6 7.8a2.8 2.8 0 0 0-2-2C17.8 5.3 12 5.3 12 5.3s-5.8 0-7.6.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2 12a29 29 0 0 0 .4 4.2 2.8 2.8 0 0 0 2 2c1.8.5 7.6.5 7.6.5s5.8 0 7.6-.5a2.8 2.8 0 0 0 2-2A29 29 0 0 0 22 12a29 29 0 0 0-.4-4.2Z" />
      <path d="M10 15.3V8.7l5.5 3.3L10 15.3Z" className="fill-white" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M13.5 21v-7h2.4l.4-2.8h-2.8V9.4c0-.8.2-1.4 1.4-1.4H16V5.5c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.2v2.6H8.8V14H11v7h2.5Z" />
    </svg>
  );
}

function getSocialIcon(label: string) {
  if (label === "Instagram") return <InstagramIcon />;
  if (label === "YouTube") return <YoutubeIcon />;
  return <FacebookIcon />;
}

export function SocialLinksRow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`Buka ${item.label}`}
          title={item.label}
          className={`inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r ${item.accent} !text-slate-950 shadow-[0_14px_34px_-20px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-22px_rgba(15,23,42,0.48)]`}
        >
          {getSocialIcon(item.label)}
        </a>
      ))}
    </div>
  );
}