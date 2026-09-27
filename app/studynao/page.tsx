import type { Metadata } from "next";
import { StudyNaoPage } from "@/components/nao/nao-site";

export const metadata: Metadata = {
  title: "StudyNAO | Les Online CSCA",
  description: "Belajar CSCA bersama StudyNAO melalui kelas online yang terarah dan pendampingan belajar.",
};

export default function Page() {
  return <StudyNaoPage />;
}
