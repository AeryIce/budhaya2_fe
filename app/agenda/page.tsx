import { redirect } from "next/navigation";

export default function LegacyAgendaRedirect() {
  redirect("/info-sekolah/event");
}
