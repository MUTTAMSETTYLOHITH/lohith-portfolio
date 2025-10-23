import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lohith Muttamsetty — Java & Cloud-Native Engineer",
  description:
    "Java & cloud-native engineer building intelligent microservices and real-time platforms on AWS/Kubernetes — secure by default, observable, and fast.",
  keywords: [
    "Java","Spring Boot","React","Next.js","AWS","Kubernetes","Kafka","OIDC","SAML","Microservices","Cloud Native","DevOps"
  ],
  openGraph: {
    title: "Lohith Muttamsetty — Java & Cloud-Native Engineer",
    description:
      "99.9% uptime · ↓40% latency · 2× faster releases. Building intelligent microservices & cloud platforms.",
    type: "website",
    url: "https://your-domain.example",
  },
  metadataBase: new URL("https://your-domain.example"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}