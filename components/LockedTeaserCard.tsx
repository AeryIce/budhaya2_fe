"use client";

import { useState } from "react";

type Props = {
  title: string;
  phase: string;
  desc: string;
};

export function LockedTeaserCard({ title, phase, desc }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group w-full rounded-xl border bg-white p-4 text-left hover:border-black/40"
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="font-semibold">{title}</div>
          <span className="rounded-full border px-2 py-0.5 text-xs">ADD-ON {phase} 🔒</span>
        </div>
        <div className="text-sm text-black/70">{desc}</div>
        <div className="mt-3 text-xs text-black/60 group-hover:underline">Klik untuk info</div>
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-lg rounded-xl bg-white p-5"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="mb-2 text-sm font-semibold">Modul Tambahan (Add-On)</div>
            <div className="mb-4 text-sm text-black/70">
              Fitur ini <b>di luar Website Standar</b> dan dihitung terpisah sesuai kebutuhan sekolah.
            </div>
            <button className="rounded-lg border px-3 py-1 text-sm" onClick={() => setOpen(false)}>
              Oke
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}