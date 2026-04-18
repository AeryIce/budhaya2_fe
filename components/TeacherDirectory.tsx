"use client";

import { useEffect, useState } from "react";
import { teachers } from "@/data/mock";

export function TeacherDirectory() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = teachers.find((item) => item.id === selectedId) ?? null;

  useEffect(() => {
    if (!selected) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedId(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {teachers.map((teacher) => (
          <button
            key={teacher.id}
            type="button"
            onClick={() => setSelectedId(teacher.id)}
            className="group overflow-hidden rounded-[26px] border border-sky-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/4.2] overflow-hidden bg-slate-100">
              <img
                alt={teacher.name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                src={teacher.photoUrl}
              />
            </div>
            <div className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{teacher.subject}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{teacher.name}</div>
              <div className="mt-1 text-sm font-medium text-slate-700">{teacher.role}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{teacher.shortBio}</div>
            </div>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6">
          <button
            type="button"
            aria-label="Tutup detail guru"
            onClick={() => setSelectedId(null)}
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-[3px]"
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="teacher-detail-title"
            className="relative z-[91] max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/40 bg-white shadow-[0_30px_100px_-35px_rgba(15,23,42,0.6)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-sky-100 bg-sky-50/80 px-5 py-4 md:px-7">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">Detail Guru — Mockup Popup</div>
                <div id="teacher-detail-title" className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                  {selected.name}
                </div>
                <div className="mt-1 text-sm text-slate-600">{selected.role}</div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-sky-100 bg-white text-xl text-slate-600 transition hover:bg-sky-50 hover:text-sky-900"
              >
                ×
              </button>
            </div>

            <div className="max-h-[calc(90vh-88px)] overflow-y-auto px-5 py-5 md:px-7 md:py-7">
              <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="overflow-hidden rounded-[28px] border border-sky-100 bg-slate-50">
                  <img alt={selected.name} className="h-full w-full object-cover" src={selected.photoUrl} />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] bg-sky-50 p-5">
                    <div className="text-sm font-semibold text-sky-900">Bidang & Pendidikan</div>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">Mata pelajaran:</span> {selected.subject}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Pendidikan:</span> {selected.education}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Email:</span> {selected.email}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-sky-100 p-5">
                    <div className="text-sm font-semibold text-slate-900">Fokus pembinaan</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.focus.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-sm text-sky-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 text-sm leading-7 text-slate-600">{selected.shortBio}</div>
                  </div>

                  <div className="rounded-[24px] border border-dashed border-sky-200 bg-white p-5 text-sm leading-7 text-slate-500">
                    Field detail guru final masih bisa menyesuaikan keputusan pihak sekolah. Untuk mockup ini,
                    alur klik → popup dibuat langsung di atas halaman supaya tetap nyaman meski jumlah guru banyak.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}