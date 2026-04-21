import { redirect } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyBeritaDetailRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/info-sekolah/berita/${slug}`);
}
