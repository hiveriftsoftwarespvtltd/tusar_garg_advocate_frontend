import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Control Center | Advocate Tushar Garg",
  description: "Administrative portal for Advocate Tushar Garg digital legal platform.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
