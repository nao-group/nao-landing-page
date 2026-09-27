import type { Metadata } from "next";
import { ThinkNaoLanding } from "@/components/landing/thinknao-landing";

export const metadata: Metadata = {
  title: "ThinkNAO | Latihan CSCA Mandiri",
  description: "Persiapkan CSCA secara mandiri dengan latihan adaptif, pembahasan, dan simulasi ujian di ThinkNAO.",
};

export default function ThinkNaoPage() {
  return <ThinkNaoLanding />;
}
