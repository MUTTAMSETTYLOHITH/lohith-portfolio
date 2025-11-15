"use client";
import * as React from "react";
import Link from "next/link";

const RESUME_PATH = "/resume/lohith-muttamsetty-resume.pdf";

export default function ResumePage() {
  const [copied, setCopied] = React.useState(false);
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.origin + RESUME_PATH);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="text-sm text-muted-foreground">View, download, or share the PDF.</p>
        </div>
        <div className="flex items-center gap-2">
          <a className="rounded-lg px-3 py-2 text-sm font-semibold border" href={RESUME_PATH} download>
            Download
          </a>
          <a className="rounded-lg px-3 py-2 text-sm font-semibold border" href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
            Open PDF
          </a>
          <button onClick={copyLink} className="rounded-lg px-3 py-2 text-sm font-semibold border">
            {copied ? "Copied!" : "Copy Link"}
          </button>
        </div>
      </header>

      <section className="mt-6 rounded-xl border overflow-hidden">
        <object data={RESUME_PATH} type="application/pdf" className="w-full" style={{ height: "85vh" }}>
          <div className="p-6 text-sm">
            PDF preview not available here.{" "}
            <Link className="underline" href={RESUME_PATH} target="_blank">Open the PDF</Link>
            {" "}or use the Download button above.
          </div>
        </object>
      </section>
    </main>
  );
}