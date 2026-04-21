"use client";

import { useEffect, useMemo, useState } from "react";
import { staffMembers, teachers, type Teacher } from "@/data/mock";

const TEACHER_PLACEHOLDER = "/teacher-placeholder.svg";

function PersonSection({
  title,
  description,
  items,
  onSelect,
}: {
  title: string;
  description: string;
  items: Teacher[];
  onSelect: (id: string) => void;
}) {
  return (
    <section>
      <div className="mb-5">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">{title}</div>
        <div className="mt-2 text-sm leading-7 text-slate-600">{description}</div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((person) => (
          <button
            key={person.id}
            type="button"
            onClick={() => onSelect(person.id)}
            className="group overflow-hidden rounded-[26px] border border-sky-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="aspect-[4/4.2] overflow-hidden bg-slate-50">
              <img
                alt={`Placeholder foto untuk ${person.name}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                src={person.photoUrl || TEACHER_PLACEHOLDER}
              />
            </div>

            <div className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{person.subject}</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">{person.name}</div>
              <div className="mt-1 text-sm font-medium text-slate-700">{person.role}</div>
              <div className="mt-3 text-sm leading-7 text-slate-600">{person.shortBio}</div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

export function TeacherDirectory() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const allPeople = useMemo(() => [...teachers, ...staffMembers], []);
  const selected = allPeople.find((item) => item.id === selectedId) ?? null;

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
      <PersonSection
        title="Guru"
        description="Bagian ini menampilkan tenaga pendidik terlebih dahulu. Foto masih memakai placeholder sementara agar tim sekolah dapat mengganti foto resmi secara bertahap."
        items={teachers}
        onSelect={setSelectedId}
      />

      <div className="my-12 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      <PersonSection
        title="Karyawan"
        description="Bagian ini menampilkan tenaga kependidikan dan karyawan sekolah yang juga ikut menjadi wajah pelayanan sekolah di hadapan publik."
        items={staffMembers}
        onSelect={setSelectedId}
      />

      {selected ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6">
          <button
            type="button"
            aria-label="Tutup detail"
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
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Detail Profil
                </div>
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
                  <img
                    alt={`Placeholder foto untuk ${selected.name}`}
                    className="h-full w-full object-cover"
                    src={selected.photoUrl || TEACHER_PLACEHOLDER}
                  />
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] bg-sky-50 p-5">
                    <div className="text-sm font-semibold text-sky-900">Bidang / Peran</div>
                    <div className="mt-3 space-y-2 text-sm leading-7 text-slate-700">
                      <p>
                        <span className="font-semibold text-slate-900">Posisi utama:</span> {selected.subject}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Keterangan:</span> {selected.education}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-900">Kontak sekolah:</span> {selected.email}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-sky-100 p-5">
                    <div className="text-sm font-semibold text-slate-900">Fokus</div>
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
                    Foto masih menggunakan placeholder sementara agar tim sekolah dapat memperbarui foto resmi secara bertahap tanpa mengganggu tampilan mockup.
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