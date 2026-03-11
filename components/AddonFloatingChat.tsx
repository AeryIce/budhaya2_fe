"use client";

import { useMemo, useState } from "react";
import { schoolProfile } from "@/data/mock";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: number;
  role: ChatRole;
  text: string;
};

const quickPrompts = [
  "Bagaimana alur PPDB?",
  "Jam operasional sekolah",
  "Kontak dan alamat sekolah",
];

function buildReply(question: string) {
  const value = question.toLowerCase();

  if (value.includes("ppdb") || value.includes("daftar") || value.includes("penerimaan")) {
    return "Terima kasih. Pada versi aktif Add-On, chatbot dapat menjelaskan alur PPDB, persyaratan berkas, jadwal gelombang, dan status pendaftaran berdasarkan konten resmi sekolah. Saat ini tombol ini masih berupa preview demo.";
  }

  if (value.includes("jam") || value.includes("operasional") || value.includes("buka")) {
    return "Pada versi aktif Add-On, chatbot dapat menjawab pertanyaan umum seperti jam layanan sekolah, jadwal agenda, serta pengumuman terbaru tanpa harus mencari manual di setiap halaman. Saat ini fitur masih berupa preview Add-On.";
  }

  if (value.includes("alamat") || value.includes("kontak") || value.includes("telepon") || value.includes("email")) {
    return `Preview Add-On ini nantinya dapat menjawab informasi dasar sekolah seperti alamat ${schoolProfile.address}, telepon ${schoolProfile.phone}, dan email ${schoolProfile.email} berdasarkan data resmi yang sudah disiapkan.`;
  }

  return "Terima kasih atas pesannya. Preview Tanya Sekolah masih belum aktif untuk publik. Pada versi Add-On, chatbot ini dapat membantu menjawab FAQ sekolah, info kontak, agenda, berita, dan alur layanan sekolah secara lebih cepat dengan dukungan AI.";
}

export function AddonFloatingChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        id: 1,
        role: "assistant",
        text: "Halo, saya preview Tanya Sekolah. Silakan ketik pertanyaan singkat untuk melihat contoh pengalaman chatbot berbasis AI.",
      },
    ],
    [],
  );
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  const handleSend = (preset?: string) => {
    const text = (preset ?? input).trim();

    if (!text) {
      return;
    }

    setMessages((current) => [
      ...current,
      { id: Date.now(), role: "user", text },
      { id: Date.now() + 1, role: "assistant", text: buildReply(text) },
    ]);
    setInput("");
    setOpen(true);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setInput("");
  };

  return (
    <div className="fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5">
      {open ? (
        <div className="mb-3 w-[min(92vw,370px)] overflow-hidden rounded-[26px] border border-sky-200 bg-white shadow-[0_24px_70px_-32px_rgba(2,132,199,0.55)]">
          <div className="bg-gradient-to-r from-sky-950 via-blue-900 to-sky-700 px-4 py-4 text-white">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100">Preview Add-On</div>
                <div className="mt-1 text-base font-semibold">Tanya Sekolah</div>
                <div className="mt-1 text-xs text-blue-50">Powered by AI • warna disesuaikan identitas sekolah</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full border border-white/20 px-2.5 py-1 text-xs font-semibold text-white/90 transition hover:bg-white/10"
              >
                Tutup
              </button>
            </div>
          </div>

          <div className="space-y-4 bg-sky-50/50 p-4">
            <div className="rounded-2xl border border-sky-100 bg-white p-3 text-xs leading-6 text-slate-600">
              Tombol ini dibuat sebagai simulasi agar pihak sekolah bisa membayangkan pengalaman layanan tanya jawab otomatis sebelum fitur diaktifkan penuh.
            </div>

            <div className="max-h-[300px] space-y-3 overflow-y-auto pr-1">
              {messages.map((message) => (
                <div key={message.id} className={message.role === "assistant" ? "flex justify-start" : "flex justify-end"}>
                  <div
                    className={[
                      "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-6 shadow-sm",
                      message.role === "assistant"
                        ? "border border-sky-100 bg-white text-slate-700"
                        : "bg-sky-900 text-white",
                    ].join(" ")}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="rounded-full border border-sky-200 bg-white px-3 py-1.5 text-xs font-medium text-sky-800 transition hover:border-sky-300 hover:bg-sky-50"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="rounded-[22px] border border-sky-100 bg-white p-3">
              <div className="flex items-end gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleSend();
                    }
                  }}
                  className="min-w-0 flex-1 rounded-2xl border border-sky-100 px-3 py-2.5 text-sm text-slate-700 outline-none ring-0 placeholder:text-slate-400 focus:border-sky-300"
                  placeholder="Tulis pertanyaan untuk melihat preview..."
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  className="rounded-2xl bg-sky-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-800"
                >
                  Kirim
                </button>
              </div>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] leading-5 text-slate-500">
                <span>Preview jawaban otomatis berbasis konten resmi sekolah.</span>
                <button type="button" onClick={resetChat} className="font-semibold text-sky-800">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="ml-auto flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-950 via-blue-900 to-sky-700 px-4 py-3 text-left text-white shadow-[0_18px_50px_-24px_rgba(2,132,199,0.7)] transition hover:-translate-y-0.5"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/12 text-xl">💬</span>
        <span>
          <span className="block text-sm font-semibold">Tanya Sekolah</span>
          <span className="block text-xs text-blue-100">Preview Add-On AI</span>
        </span>
      </button>
    </div>
  );
}
